import {HandlingBasicErrors, MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";
import dayjs from 'dayjs'
import {createErrorLog} from "@memo28.monitoring/service";
import {AutoNetWork, Network} from "../autoInfo/network";

export class TrackingUserInteractionEvent extends HandlingBasicErrors {

    private userConfig?: MonitoringConfigImpl

    constructor(config?: MonitoringConfigImpl) {
        super(config)
        this.userConfig = config

        if (!this.userConfig?.customErrorTypes.includes('user-defined')) return

        this.setType('user-defined')
        this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))

        if (config?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())
    }

    setMessage(msg: string): this {
        if (!this.userConfig?.customErrorTypes.includes('user-defined')) return this
        const error = new Error(msg);
        error.stack && super.setStack(error.stack)
        return super.setMessage(msg);
    }

    done() {
        if (!this.userConfig?.customErrorTypes.includes('user-defined')) return
        createErrorLog({
            data: JSON.parse(JSON.stringify(this))
        })
    }
}
