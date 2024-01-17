import {TrackingUnhandledrejection} from "./trackingUnhandledrejection";
import {TrackingWindowError} from "./trackingWindowError";
import {TrackingCrossOriginError} from "./trackingCrossOriginError";
import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";

export interface trackingCallbackOptions {
    listening?: (target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError, selfCb: (target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError) => void) => void;
    config?: MonitoringConfigImpl
}

export class TrackingCallback {

    private retriesConst = 0

    constructor(private options: trackingCallbackOptions) {
        this.retriesConst = this.options.config?.getMaxRetries() || 0
    }

    listening(target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError) {
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
