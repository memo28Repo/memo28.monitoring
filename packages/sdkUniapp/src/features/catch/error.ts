// import {AutoNetWork, Network} from "../autoinfo/network";
import { TrackingCallback} from "@memo28.monitoring/sdk-abstract";
import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract/src";
import dayjs from "dayjs";
import {HandlingBasicErrorsUniApp} from "../autoinfo/handlingBasicErrorsUniapp";

/**
 *
 *
 *
 * @see https://uniapp.dcloud.net.cn/api/application.html#onerror
 *
 * @public
 *
 */
export class TrackingError extends HandlingBasicErrorsUniApp {

    constructor(config?: MonitoringConfigImpl, private callback?: TrackingCallback) {
        super(config)
        // if (config?.getCaptureNetworkRequests())  {
        //     let network = new Network()
        // }
        uni.onError((error) => {
            this.setMessage('uni.onError')
            this.setStack(error)
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
            this.setType('uniApp.onError')
            this.callback?.listening(this)
        })

    }
}
