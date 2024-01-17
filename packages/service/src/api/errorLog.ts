import {http, ListResponse, PagingParameters, Response} from '../http'
import {ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl} from '@memo28.monitoring/sdk-abstract'
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


export interface errorLogDetails extends ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, NetworkContextImpl {
    ID: number
    CreatedAt: string
}

export function createErrorLog(errorLogRequest: createErrorLogRequest) {
    return http<Response<number>>({
        // @ts-ignore
        method: 'POST',
        url: "/monitoringErrors/createErrorLog",
        data: errorLogRequest,
    })
}

export function getErrorLog(id: number | string) {
    return http<Response<errorLogDetails>>({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLog",
        params: {
            id
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
        }
    })
}


export function getErrorLogList(params: PagingParameters) {
    return http<Response<ListResponse<errorLogDetails[]>>>({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLogList",
        params: {
            ...params
        }
    })
}

