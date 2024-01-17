import {HandlingBasicErrors, MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {TrackingCallback} from './trackingCallback'
import {AutoNetWork, Network} from "../autoInfo/network";
import dayjs from "dayjs";


const originalXMLHttpRequest = window.XMLHttpRequest;

function rewriteHttpRequest(corsCallback?: () => void) {

    return function () {
        // 创建原始 XMLHttpRequest 对象的实例
        const xhr = new originalXMLHttpRequest()


        xhr.onreadystatechange = function () {
            if (xhr.status === 0 && xhr.readyState === 4) {
                // 检查是否有 CORS 头信息
                const corsHeader = xhr.getResponseHeader('Access-Control-Allow-Origin');
                // 获取响应头信息
                if (!corsHeader) corsCallback?.()
            }
        }

        return xhr
    }
}

export class TrackingCrossOriginError extends HandlingBasicErrors {

    constructor(config?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback) {
        super(config);

        if (!config?.getCrossOriginErrorTracking()) return
        if (!config?.getCustomErrorTypes().includes('cross domain')) return

        this.rewriteHttp(() => {
            if (config?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())
            this.setMessage('a cross-domain error occurred')
            this.setType('cross domain')
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
            this.trackingCallback?.listening?.(this)
        })
    }

    rewriteHttp(callback: () => void) {
        // @ts-ignore
        window.XMLHttpRequest = rewriteHttpRequest(callback)
    }

    setMessage(msg: string): this {
        const error = new Error(msg);
        error.stack && this.setStack(error.stack)
        return super.setMessage(msg);
    }

}
