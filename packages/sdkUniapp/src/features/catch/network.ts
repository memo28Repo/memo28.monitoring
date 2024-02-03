import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract/src";
import {TrackingCallback} from "@memo28.monitoring/sdk-abstract";
import {HandlingBasicErrorsUniApp} from "../autoinfo/handlingBasicErrorsUniapp";
import {Network, AutoNetWork} from "../autoinfo/network";
import dayjs from "dayjs";

export class TrackingNetwork extends HandlingBasicErrorsUniApp {
    constructor(config?: MonitoringConfigImpl, private callback?: TrackingCallback) {
        super(config)
        if (!config?.getCaptureNetworkRequests()) return
        uni.onNetworkStatusChange((res) => {
            this.setMessage('uni.onNetworkStatusChange')
            this.setType('uniApp.network')
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))

            this.setStack(JSON.stringify(res))

            new Network((network) => {
                new AutoNetWork(this, network)
                this.callback?.listening(this)
            })
        })

    }
}
