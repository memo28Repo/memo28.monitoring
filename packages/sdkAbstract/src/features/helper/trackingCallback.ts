import {MonitoringConfigImpl} from "../../index";

export interface trackingCallbackOptions<T> {
    listening?: (target: T, selfCb: (target: T) => void) => void;
    config?: MonitoringConfigImpl
}


/**
 * 监听回调
 *
 * 根据一些监控配置回调请求次数
 */
export class TrackingCallback<T = any> {

    private retriesConst = 0

    constructor(private options: trackingCallbackOptions<T>) {
        this.retriesConst = this.options.config?.getMaxRetries() || 0
    }

    listening(target: T) {
        let retries = this.options.config?.getMaxRetries() || 0;

        if (retries <= 0) {
            this.options.config?.setMaxRetries(this.retriesConst)
            return this
        }

        this.options.config?.setMaxRetries(retries - 1)

        let clearTimeoutId = setTimeout(() => {
            this.options.listening?.(target, this.listening.bind(this, target))
            clearTimeout(clearTimeoutId)
        }, this.options.config?.getReportingInterval())

        return this
    }

}
