import {
    MonitoringConfigImpl,TrackingCallback
} from '@memo28.monitoring/sdk-abstract';
import {HandlingBasicErrors} from "@memo28.monitoring/sdk-abstract";
import dayjs from 'dayjs'
import {AutoNetWork, Network} from "../autoInfo/network";
import {trackingCallbackType} from "./trackingCallback";

/**
 * 捕捉未处理的 Promise rejection 错误。
 *
 *
 * 建议Promise.reject 时 应该传递一个error对象，而不是字符串。 这样能够获取到更多有用信息
 *
 * 例如：
 *
 * ```js
 * Promise.reject(new Error('error message'))
 * ```
 *
 *
 * @public
 */
export class TrackingUnhandledrejection extends HandlingBasicErrors {

    userConfig?: MonitoringConfigImpl

    constructor(config?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback<trackingCallbackType>) {
        super(config);

        this.userConfig = config

        // 如果未提供配置或未启用错误追踪，则直接返回
        if (!this.userConfig?.errorTrackingEnabled) return;

        if (!this.userConfig.customErrorTypes.includes('unhandledrejection')) return


        // 监听未处理的 Promise rejection 错误
        window.addEventListener('unhandledrejection', (event) => {
            const reason = event.reason;

            // 检查 reason 是否为 Error 对象
            if (reason instanceof Error) {
                this.setMessage(reason.message || '');
                this.setStack(reason.stack || '');
            } else if (typeof reason === 'string') {
                // 如果 reason 是字符串，直接作为消息处理
                this.setMessage(reason);
            } else {
                // 如果无法确定错误消息，使用默认消息
                this.setMessage('Unhandled Promise Rejection');
            }

            this.setType('unhandledrejection')

            this.setKind('stableTrigger');

            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))

            if (this.userConfig?.getCaptureNetworkRequests()) {
                new AutoNetWork(this, new Network())
            }

            this.trackingCallback?.listening?.(this)

        });
    }

}
