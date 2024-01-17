import { TrackingUnhandledrejection } from "./trackingUnhandledrejection";
import { TrackingWindowError } from "./trackingWindowError";
import { TrackingCrossOriginError } from "./trackingCrossOriginError";
import { MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
export interface trackingCallbackOptions {
    listening?: (target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError, selfCb: (target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError) => void) => void;
    config?: MonitoringConfigImpl;
}
export declare class TrackingCallback {
    private options;
    private retriesConst;
    constructor(options: trackingCallbackOptions);
    listening(target: TrackingUnhandledrejection | TrackingWindowError | TrackingCrossOriginError): this;
}
