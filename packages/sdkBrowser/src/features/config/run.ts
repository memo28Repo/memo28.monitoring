import {
    MonitoringConfigImpl,
    TrackingCallback,
    createTrackingUserInteractionEvent,
    createTrackingUserInteractionEventReturns,
    HandlingBasicErrors
} from "@memo28.monitoring/sdk-abstract";
import {TrackingWindowError} from '../windowError/trackingWindowError'
import {TrackingUnhandledrejection} from "../windowError/trackingUnhandledrejection";
import {TrackingCrossOriginError} from "../windowError/trackingCrossOriginError";
import {createErrorLog, isAxiosError, service} from "@memo28.monitoring/service";
import {TrackingPerformance} from '../windowError/trackingPerformance'
import {AutoNetWork, Network} from "../autoInfo/network";


export class Run {

    private TrackingPerformance: TrackingPerformance | null = null

    private TrackingWindowError: TrackingWindowError | null = null

    private TrackingUnhandledrejection: TrackingUnhandledrejection | null = null

    private TrackingCrossOriginError: TrackingCrossOriginError | null = null

    private readonly TrackingUserInteractionEvent:  createTrackingUserInteractionEventReturns | null = null

    constructor(private config: MonitoringConfigImpl) {

        if (!config.getReportingEndpoint().trim().length) {
            throw new Error("reportingEndpoint 字段不能为空")
        }

        service.setDefaultConfig({
            baseURL: config.getReportingEndpoint()
        })

        this.TrackingUserInteractionEvent = createTrackingUserInteractionEvent<HandlingBasicErrors>(HandlingBasicErrors, {
            done(target) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then()
            },
            createTrackingUserInteraction(target, config) {
                if (config?.getCaptureNetworkRequests()) new AutoNetWork(target, new Network())
            },
            config: config
        });


        this.TrackingPerformance = new TrackingPerformance(config, new TrackingCallback({
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

        this.TrackingWindowError = new TrackingWindowError(config, new TrackingCallback({
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

        this.TrackingUnhandledrejection = new TrackingUnhandledrejection(config, new TrackingCallback({
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

        this.TrackingCrossOriginError = new TrackingCrossOriginError(config, new TrackingCallback({
            config, listening(target) {
                createErrorLog({
                    data: JSON.parse(JSON.stringify(target))
                }).then()
            },
        }))

    }

    setUserId(userId: string): this {
        this.TrackingUnhandledrejection?.setUserId(userId)
        this.TrackingWindowError?.setUserId(userId)
        this.TrackingCrossOriginError?.setUserId(userId)
        this.TrackingPerformance?.setUserId(userId)
        // @ts-ignore
        this.TrackingUserInteractionEvent?.setUserId(userId)
        return this
    }

    getTrackingUserInteractionEvent() {
        return this.TrackingUserInteractionEvent
    }
}

