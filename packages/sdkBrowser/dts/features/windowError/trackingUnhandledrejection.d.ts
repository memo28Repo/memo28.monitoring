import { MonitoringConfigImpl } from '@memo28.monitoring/sdk-abstract';
import { TrackingCallback } from './trackingCallback';
import { HandlingBasicErrors } from "@memo28.monitoring/sdk-abstract";
/**
 * 捕捉未处理的 Promise rejection 错误。
 *
 *
 * 建议Promise.reject 时 应该传递一个error对象，而不是字符串。 这样能够获取到更多有用信息
 *
 * 例如：
 *
 * ```js
 * Promise.reject(new Error('error message'))
 * ```
 *
 *
 * @public
 */
export declare class TrackingUnhandledrejection extends HandlingBasicErrors {
    private trackingCallback?;
    userConfig?: MonitoringConfigImpl;
    constructor(config?: MonitoringConfigImpl, trackingCallback?: TrackingCallback | undefined);
}
