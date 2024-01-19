import {http, ListResponse, PagingParameters, Response} from '../http'
import {
    PerformanceLongTaskTypes,
    PerformanceNavigation,
    PerformanceResource,
    PerformanceVisibilityState,
    ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl
} from '@memo28.monitoring/sdk-abstract'
import {NetworkContextImpl} from "@memo28.monitoring/sdk-abstract/src";


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
    data: string
}


// @ts-ignore
export interface errorLogDetails extends ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, NetworkContextImpl, PerformanceLongTaskTypes, PerformanceNavigation, PerformanceResource, PerformanceVisibilityState {
    ID: number
    CreatedAt: string
}

export function createErrorLog(errorLogRequest: createErrorLogRequest) {
    return http<Response<number>>({
        // @ts-ignore
        method: 'POST',
        url: "/monitoringErrors/createErrorLog",
        data: errorLogRequest,
        pocketValue: {
            data: 0
        }
    })
}

export function getErrorLog(id: number | string) {
    return http<Response<errorLogDetails>>({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLog",
        params: {
            id
        },
        pocketValue: {
            data: {}
        }
    })
}


export function deleteErrorLog(id: number | string) {
    return http<Response<number>>({
        // @ts-ignore
        method: 'DELETE',
        url: "/monitoringErrors/deleteErrorLog",
        data: {
            id
        },
    })
}


export function getErrorLogList(params: PagingParameters) {
    return http<Response<ListResponse<errorLogDetails[]>>>({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLogList",
        params: {
            ...params
        },
        pocketValue: {
            data: {
                list: [],
                total: 0
            }
        }
    })
}

