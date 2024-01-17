import { HandlingBasicErrors, MonitoringConfigImpl } from "@memo28.monitoring/sdk-abstract";
export declare class TrackingUserInteractionEvent extends HandlingBasicErrors {
    private userConfig?;
    constructor(config?: MonitoringConfigImpl);
    setMessage(msg: string): this;
    done(): void;
}
