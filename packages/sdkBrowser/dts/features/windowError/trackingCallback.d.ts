import { TrackingUnhandledrejection } from "./trackingUnhandledrejection";
import { TrackingWindowError } from "./trackingWindowError";
import { TrackingCrossOriginError } from "./trackingCrossOriginError";
import { MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { PerformanceUtilsTypes } from "./performance";
export interface trackingCallbackOptions {
    listening?: (target: PerformanceUtilsTypes | TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError, selfCb: (target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError | PerformanceUtilsTypes) => void) => void;
    config?: MonitoringConfigImpl;
}
export declare class TrackingCallback {
    private options;
    private retriesConst;
    constructor(options: trackingCallbackOptions);
    listening(target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError): this;
}
