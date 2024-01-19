import { HandlingBasicErrors, MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
import { TrackingCallback } from './trackingCallback';
export declare function rewriteHttpRequest(corsCallback?: () => void, statusCallback?: (status: number, readyStatus: number, xhr: XMLHttpRequest) => void): () => XMLHttpRequest;
export declare class TrackingCrossOriginError extends HandlingBasicErrors {
    private trackingCallback?;
    constructor(config?: MonitoringConfigImpl, trackingCallback?: TrackingCallback | undefined);
    rewriteHttp(callback: () => void, statusCallback?: (status: number, readyStatus: number, xhr: XMLHttpRequest) => void): void;
    setMessage(msg: string): this;
}
