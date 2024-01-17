import { HandlingBasicErrors, NetworkContextImpl } from "@memo28.monitoring/sdk-abstract";
export declare class Network implements NetworkContextImpl {
    downLink: string;
    rtt: string;
    saveData: boolean;
    effectiveType: string;
    constructor();
    getDownLink(): string;
    setDownLink(value: string): this;
    getRtt(): string;
    setRtt(value: string): this;
    getEffectiveType(): string;
    getSaveData(): boolean;
    setEffectiveType(value: string): this;
    setSaveData(value: boolean): this;
}
export declare class AutoNetWork {
    constructor(target: HandlingBasicErrors, network: Network);
}
