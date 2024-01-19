import { HandlingBasicErrors, MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { TrackingCallback } from "./trackingCallback";
export declare class TrackingPerformance extends HandlingBasicErrors {
    private trackingCallback?;
    constructor(config?: MonitoringConfigImpl, trackingCallback?: TrackingCallback | undefined);
}
