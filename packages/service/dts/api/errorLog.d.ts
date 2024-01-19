import { ListResponse, PagingParameters, Response } from '../http';
import { PerformanceLongTaskTypes, PerformanceNavigation, PerformanceResource, PerformanceVisibilityState, ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl } from '@memo28.monitoring/sdk-abstract';
import { NetworkContextImpl } from "@memo28.monitoring/sdk-abstract/src";
/**
 *
 *
 * error og请求类型
 *
 * @public
 */
export interface createErrorLogRequest {
    /**
     *
     *
     * 得是序列话之后的数据
     *
     * @public
     *
     */
    data: string;
}
export interface errorLogDetails extends ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, NetworkContextImpl, PerformanceLongTaskTypes, PerformanceNavigation, PerformanceResource, PerformanceVisibilityState {
    ID: number;
    CreatedAt: string;
}
export declare function createErrorLog(errorLogRequest: createErrorLogRequest): Promise<Response<number>>;
export declare function getErrorLog(id: number | string): Promise<Response<errorLogDetails>>;
export declare function deleteErrorLog(id: number | string): Promise<Response<number>>;
export declare function getErrorLogList(params: PagingParameters): Promise<Response<ListResponse<errorLogDetails[]>>>;
