import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {TrackingWindowError} from '../windowError/trackingWindowError'
import {TrackingUnhandledrejection} from "../windowError/trackingUnhandledrejection";
import {TrackingUserInteractionEvent} from "../windowError/trackingUserInteractionEvent";
import {TrackingCrossOriginError} from "../windowError/trackingCrossOriginError";
import {createErrorLog, isAxiosError, service} from "@memo28.monitoring/service";
import {TrackingCallback} from "../windowError/trackingCallback";
import {TrackingPerformance} from '../windowError/trackingPerformance'


export class Run {

    constructor(private config: MonitoringConfigImpl) {

        if (!config.getReportingEndpoint().trim().length) {
            throw new Error("reportingEndpoint 字段不能为空")
        }

        service.setDefaultConfig({
            baseURL: config.getReportingEndpoint()
        })


        new TrackingPerformance(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                createErrorLog({
                    // @ts-ignore
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

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

