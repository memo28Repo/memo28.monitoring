import {HandlingBasicErrors, NetworkContextImpl} from "@memo28.monitoring/sdk-abstract";

export class Network implements NetworkContextImpl {
    downLink = ''
    rtt = ''
    saveData = false
    effectiveType = ''

    constructor() {
        const connection = navigator.connection;
        this.setRtt(connection.rtt)
        this.setDownLink(connection.downlink)
        this.setSaveData(connection.saveData || false)
        this.setEffectiveType(connection.effectiveType)
    }

    getDownLink(): string {
        return this.downLink;
    }

    setDownLink(value: string): this {
        this.downLink = value
        return this;
    }

    getRtt(): string {
        return this.rtt;
    }

    setRtt(value: string): this {
        this.rtt = value
        return this;
    }

    getEffectiveType(): string {
        return this.effectiveType;
    }

    getSaveData(): boolean {
        return this.saveData;
    }

    setEffectiveType(value: string): this {
        this.effectiveType = value
        return this;
    }

    setSaveData(value: boolean): this {
        this.saveData = value
        return this;
    }
}

export class AutoNetWork {
    constructor(target: HandlingBasicErrors, network: Network) {
        target.setDownLink(network.getDownLink())
        target.setRtt(network.getRtt())
        target.setSaveData(network.getSaveData())
        target.setEffectiveType(network.getEffectiveType())
    }
}
