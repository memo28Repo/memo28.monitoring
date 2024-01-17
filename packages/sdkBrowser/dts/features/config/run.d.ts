import { MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { TrackingUserInteractionEvent } from "../windowError/trackingUserInteractionEvent";
export declare class Run {
    private config;
    constructor(config: MonitoringConfigImpl);
    getTrackingUserInteractionEvent(): TrackingUserInteractionEvent;
}
