import {NetworkContextImpl} from "@memo28.monitoring/sdk-abstract/src";
import {HandlingBasicErrorsUniApp} from "./handlingBasicErrorsUniapp";

export class Network implements NetworkContextImpl {

    effectiveType = ''

    constructor(callback?: (target: Network) => void) {
        uni.getNetworkType({
            success: (result) => {
                this.setEffectiveType(result.networkType)
                callback?.(this)
            }
        })
    }

    setEffectiveType(value: string): this {
        this.effectiveType = value
        return this;
    }

    getEffectiveType(): string {
        return this.effectiveType;
    }
}

export class AutoNetWork {

    constructor(handlingBasicErrors: HandlingBasicErrorsUniApp, network: Network) {
        handlingBasicErrors.setEffectiveType(network.getEffectiveType())
    }
}
