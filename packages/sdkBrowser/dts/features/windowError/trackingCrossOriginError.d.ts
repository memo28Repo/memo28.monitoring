import { HandlingBasicErrors, MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { TrackingCallback } from './trackingCallback';
export declare class TrackingCrossOriginError extends HandlingBasicErrors {
    private trackingCallback?;
    constructor(config?: MonitoringConfigImpl, trackingCallback?: TrackingCallback | undefined);
    rewriteHttp(callback: () => void): void;
    setMessage(msg: string): this;
}
