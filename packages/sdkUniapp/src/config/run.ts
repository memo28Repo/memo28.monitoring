import {
    createTrackingUserInteractionEvent,
    MonitoringConfigImpl,
    TrackingCallback
} from "@memo28.monitoring/sdk-abstract";
import {service} from "@memo28.monitoring/service";
import {TrackingError} from '../features/catch/error'
import {TrackingNetwork} from "../features/catch/network";
import {HandlingBasicErrorsUniApp} from "../features/autoinfo/handlingBasicErrorsUniapp";
import {AutoNetWork, Network} from "../features/autoinfo/network";
import {createUniAppAxiosAdapter} from '@uni-helper/axios-adapter'


export class Run {

    constructor(private config: MonitoringConfigImpl) {

        if (!config.getReportingEndpoint().trim().length) throw new Error("reportingEndpoint 字段不能为空")

        service.setDefaultConfig({
            baseURL: config.getReportingEndpoint(),
            adapter: createUniAppAxiosAdapter()
        })

        new TrackingError(config, new TrackingCallback({
            config, listening(target, selfCb) {

            },
        }))

        new TrackingNetwork(config, new TrackingCallback({
            config, listening(target, selfCb) {

            },
        }))
    }

    getTrackingUserInteractionEvent() {
        return createTrackingUserInteractionEvent<HandlingBasicErrorsUniApp>(HandlingBasicErrorsUniApp, {
            done(target: HandlingBasicErrorsUniApp, config?: MonitoringConfigImpl) {
            },
            createTrackingUserInteraction(target: HandlingBasicErrorsUniApp, config?: MonitoringConfigImpl) {
                if (config?.getCaptureNetworkRequests()) {
                    new AutoNetWork(target, new Network())
                }
            }
        })
    }
}

