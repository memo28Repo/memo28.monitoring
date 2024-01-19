import { HandlingBasicErrors, MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { TrackingCallback } from "./trackingCallback";
export declare class TrackingMonitoringRequestErrors extends HandlingBasicErrors {
    private trackingCallback?;
    constructor(config?: MonitoringConfigImpl, trackingCallback?: TrackingCallback | undefined);
}
