import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {createErrorLog} from "@memo28.monitoring/service";

export class TriggerNetwork {

    constructor(private config: MonitoringConfigImpl) {
    }


    trigger(msg: object) {
        const data = JSON.parse(JSON.stringify(msg))
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