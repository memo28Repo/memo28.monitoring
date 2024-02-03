import {
    MonitoringConfigImpl,
    TrackingCallback
} from '@memo28.monitoring/sdk-abstract'
import {HandlingBasicErrors} from "@memo28.monitoring/sdk-abstract";
import dayjs from "dayjs";
import {AutoNetWork, Network} from "../autoInfo/network";
import {trackingCallbackType} from "./trackingCallback";


/**
 *
 * power
 *
 * 捕捉运行时错误： 这包括由无效的 JavaScript 语法、未定义的变量、类型错误等导致的错误。
 *
 * 跨域脚本错误（Cross-origin Script Errors）：
 * 如果在 <script> 标签中引入的脚本发生错误，并且该脚本位于不同的域，也会触发 window.onerror 事件。
 * 这通常会导致 "Script error." 的错误消息，
 * 因为浏览器出于安全原因不会提供详细的错误信息。
 *
 * <!-- 例子：跨域脚本错误 -->
 * <script src="https://example.com/external-script.js"></script>
 *
 *
 * @public
 *
 */
export class TrackingWindowError extends HandlingBasicErrors {

    private userConfig?: MonitoringConfigImpl

    constructor(userConfigs?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback<trackingCallbackType>) {


        super(userConfigs)

        this.userConfig = userConfigs


        if (!this.userConfig?.errorTrackingEnabled) return
        if (!this.userConfig.customErrorTypes.includes('window.error')) return


        window.addEventListener('error', (event) => {
            this.setMessage(event.message)
            if (event.error) this.setStack(event.error?.stack || '')
            this.setLineno(event.lineno)
            this.setColno(event.colno)
            this.setKind('stableTrigger')
            this.setType('window.error')
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))

            if (this.userConfig?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())

            trackingCallback?.listening?.(this);
        })
    }
}
