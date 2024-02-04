import {
    createTrackingUserInteractionEvent,
    createTrackingUserInteractionEventReturns,
    MonitoringConfigImpl,
    TrackingCallback
} from "@memo28.monitoring/sdk-abstract";
import {service, createErrorLog, isAxiosError} from "@memo28.monitoring/service";
import {TrackingError} from '../features/catch/error'
import {TrackingNetwork} from "../features/catch/network";
import {HandlingBasicErrorsUniApp} from "../features/autoinfo/handlingBasicErrorsUniapp";
import {AutoNetWork, Network} from "../features/autoinfo/network";
import {createUniAppAxiosAdapter} from '@uni-helper/axios-adapter'


export class Run {

    private TrackingNetwork: TrackingNetwork | null = null


    private TrackingError: TrackingError | null = null

    private trackingUserInteractionEvent: createTrackingUserInteractionEventReturns | null = null

    constructor(private config: MonitoringConfigImpl) {

        if (!config.getReportingEndpoint().trim().length) throw new Error("reportingEndpoint 字段不能为空")

        service.setDefaultConfig({
            baseURL: config.getReportingEndpoint(),
            adapter: createUniAppAxiosAdapter()
        })

        this.TrackingError = new TrackingError(config, new TrackingCallback({
            config, listening(target, selfCb) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then((res) => {
                    if (isAxiosError(res)) selfCb(target)
                }).catch((err) => {
                    selfCb(target)
                })
            },
        }))

        this.TrackingNetwork = new TrackingNetwork(config, new TrackingCallback({
            config, listening(target, selfCb) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then((res) => {
                    if (isAxiosError(res)) selfCb(target)
                }).catch((err) => {
                    selfCb(target)
                })
            },
        }))

        this.trackingUserInteractionEvent = createTrackingUserInteractionEvent<HandlingBasicErrorsUniApp>(HandlingBasicErrorsUniApp, {
            done(target: HandlingBasicErrorsUniApp, config?: MonitoringConfigImpl) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then()
            },
            createTrackingUserInteraction(target: HandlingBasicErrorsUniApp, config?: MonitoringConfigImpl) {
                if (config?.getCaptureNetworkRequests()) {
                    new AutoNetWork(target, new Network())
                }
            },
            config: config
        });

    }


    setUserId(userId: string) {
        this.TrackingError?.setUserId(userId)
        this.TrackingNetwork?.setUserId(userId)
        // @ts-ignore
        this.trackingUserInteractionEvent?.setUserId?.(userId)
        return this
    }

    getTrackingUserInteractionEvent() {
        return this.trackingUserInteractionEvent
    }
}

