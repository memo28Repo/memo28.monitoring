import {MonitoringConfigImpl} from "../../index";
import dayjs from 'dayjs'

type createTrackingUserInteractionEventOptions<T extends any> = {
    done(target: T, config?: MonitoringConfigImpl): void
    createTrackingUserInteraction(target: T, config?: MonitoringConfigImpl): void
    config: MonitoringConfigImpl
}


export type createTrackingUserInteractionEventReturns =  {
    done(): void

    setExpandTheInformation(obj: {
        [key: string]: string | number;
    }): void
}


// @ts-ignore
export function createTrackingUserInteractionEvent<T extends any>(extendsClass: any, createTrackingUserInteractionEventOptions?: createTrackingUserInteractionEventOptions<T>): createTrackingUserInteractionEventReturns {
    // @ts-ignore
    class TrackingUserInteractionEvent extends extendsClass {

        userConfig?: MonitoringConfigImpl

        constructor(config?: MonitoringConfigImpl) {
            super(config)
            this.userConfig = config

            if (!this.userConfig?.customErrorTypes.includes('user-defined')) return

            // @ts-ignore
            this.setType('user-defined')
            // @ts-ignore
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
            createTrackingUserInteractionEventOptions?.createTrackingUserInteraction(this as any, config)
        }

        setMessage(msg: string): this {
            if (!this.userConfig?.customErrorTypes.includes('user-defined')) return this
            const error = new Error(msg);
            error.stack && super.setStack(error.stack)
            return super.setMessage(msg);
        }

        done() {
            if (!this.userConfig?.customErrorTypes.includes('user-defined')) return
            createTrackingUserInteractionEventOptions?.done(this as any, this.userConfig)
        }
    }

    // @ts-ignore
    return new TrackingUserInteractionEvent(createTrackingUserInteractionEventOptions?.config) as createTrackingUserInteractionEventReturns
}
