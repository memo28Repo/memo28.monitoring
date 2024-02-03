import {HandlingBasicErrors, MonitoringConfigImpl,TrackingCallback} from "@memo28.monitoring/sdk-abstract";
import {PerformanceUtils} from "./performance";
import {AutoNetWork, Network} from "../autoInfo/network";
import {isUrlInlist} from "./trackingCrossOriginError";
import {trackingCallbackType} from "./trackingCallback";

export class TrackingPerformance extends HandlingBasicErrors {

    constructor(config?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback<trackingCallbackType>) {
        super(config);
        if (!config?.getPerformanceTrackingEnabled()) return

        this.setType('performance')

        if (config?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())

        new PerformanceUtils().observer((el) => {
            const disableUrl = ['api/v1/monitoringErrors']
            if (el.entryType === 'resource') {
                if (isUrlInlist(el.name, disableUrl)) {
                    return
                }
            }

            // @ts-ignore
            trackingCallback?.listening?.(Object.assign({}, this, el))
        });
    }
}





