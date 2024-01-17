import { HandlingBasicErrors } from "../autoInfo/handlingBasicErrors";
import { trackingCallback } from './trackingCallback';
import { MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
export declare class TrackingLongTask extends HandlingBasicErrors {
    private config?;
    private trackingCallback?;
    constructor(config?: MonitoringConfigImpl | undefined, trackingCallback?: trackingCallback | undefined);
}
