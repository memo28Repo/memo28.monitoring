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
import {isAxiosError, service} from "@memo28.monitoring/service";
import {TrackingPerformance} from '../windowError/trackingPerformance'
import {AutoNetWork, Network} from "../autoInfo/network";
import {TriggerNetwork} from "./trigger";


export class Run {

    private TrackingPerformance: TrackingPerformance | null = null

    private TrackingWindowError: TrackingWindowError | null = null

    private TrackingUnhandledrejection: TrackingUnhandledrejection | null = null

    private TrackingCrossOriginError: TrackingCrossOriginError | null = null

    private readonly TrackingUserInteractionEvent: createTrackingUserInteractionEventReturns | null = null

    private TriggerNetwork: TriggerNetwork | null = null


    constructor(private config: MonitoringConfigImpl) {
        this.TriggerNetwork = new TriggerNetwork(config)

        if (!config?.getCustomRequests?.()) {
            if (!config.getReportingEndpoint().trim().length) {
                throw new Error("reportingEndpoint 字段不能为空")
            }
            service.setDefaultConfig({
                baseURL: config.getReportingEndpoint()
            })
        }


        const that = this
        this.TrackingUserInteractionEvent = createTrackingUserInteractionEvent<HandlingBasicErrors>(HandlingBasicErrors, {
            done(target) {
                that.TriggerNetwork?.trigger(target)
            },
            createTrackingUserInteraction(target, config) {
                if (config?.getCaptureNetworkRequests()) new AutoNetWork(target, new Network())
            },
            config: config
        });


        this.TrackingPerformance = new TrackingPerformance(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                that.TriggerNetwork?.trigger(target).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

        this.TrackingWindowError = new TrackingWindowError(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                that.TriggerNetwork?.trigger(target).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

        this.TrackingUnhandledrejection = new TrackingUnhandledrejection(config, new TrackingCallback({
            config, listening(target, triggerListening) {
                that.TriggerNetwork?.trigger(target).then(res => {
                    if (isAxiosError(res)) triggerListening(target)
                }).catch(() => {
                    triggerListening(target)
                })
            },
        }))

        this.TrackingCrossOriginError = new TrackingCrossOriginError(config, new TrackingCallback({
            config, listening(target) {
                that.TriggerNetwork?.trigger(target)
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

