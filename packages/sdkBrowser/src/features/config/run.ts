import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {TrackingWindowError} from '../windowError/trackingWindowError'
import {TrackingUnhandledrejection} from "../windowError/trackingUnhandledrejection";
import {TrackingUserInteractionEvent} from "../windowError/trackingUserInteractionEvent";
import {TrackingCrossOriginError} from "../windowError/trackingCrossOriginError";
import {createErrorLog, isAxiosError} from "@memo28.monitoring/service";
import {TrackingCallback} from "../windowError/trackingCallback";


export class Run {


    constructor(private config: MonitoringConfigImpl) {
        new TrackingWindowError(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

        new TrackingUnhandledrejection(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

        new TrackingCrossOriginError(config, new TrackingCallback({
            config, listening(target) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                })
            },
        }))

    }

    getTrackingUserInteractionEvent() {
        return new TrackingUserInteractionEvent(this.config)
    }
}

