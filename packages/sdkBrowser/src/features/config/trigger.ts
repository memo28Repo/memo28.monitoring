import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {createErrorLog} from "@memo28.monitoring/service";

export class TriggerNetwork {

    constructor(private config: MonitoringConfigImpl) {
    }


    trigger(msg: object) {
        let newMsg = msg

        if (typeof newMsg === 'object') {
            if (Reflect.get(newMsg, 'config')) Reflect.deleteProperty(newMsg, 'config')
            if (Reflect.get(newMsg, 'trackingCallback')) Reflect.deleteProperty(newMsg, 'trackingCallback')
        }

        const data = JSON.parse(JSON.stringify(newMsg))
        if (this.config.getCustomRequests()) {
            return new Promise((resolve) => {
                this.config.getCustomRequests?.()?.onReport?.(data);
                resolve(true)
            })
        }
        return createErrorLog({
            data: data
        }).then()
    }
}