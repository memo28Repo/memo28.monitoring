import { HandlingBasicErrors, NetworkContextImpl } from "@memo28.monitoring/sdk-abstract";
export declare class Network implements NetworkContextImpl {
    downLink: number;
    rtt: number;
    saveData: boolean;
    effectiveType: string;
    constructor();
    getDownLink(): number;
    setDownLink(value: number): this;
    getRtt(): number;
    setRtt(value: number): this;
    getEffectiveType(): string;
    getSaveData(): boolean;
    setEffectiveType(value: string): this;
    setSaveData(value: boolean): this;
}
export declare class AutoNetWork {
    constructor(target: HandlingBasicErrors, network: Network);
}
