import {HandlingBasicErrors, MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import {TrackingCallback} from "./trackingCallback";
import {PerformanceUtils} from "./performance";
import {AutoNetWork, Network} from "../autoInfo/network";

export class TrackingPerformance extends HandlingBasicErrors {

    constructor(config?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback) {
        super(config);
        if (!config?.getPerformanceTrackingEnabled()) return

        this.setType('performance')

        if (config?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())

        new PerformanceUtils().observer((el) => {

            // @ts-ignore
            trackingCallback?.listening?.(Object.assign({}, this, el))
        });
    }
}





