import {ServiceUtils, MultiVersionSwitching, RetData} from '@memo28/service'


export const service = new ServiceUtils().modules({
    interceptorModule: [MultiVersionSwitching, RetData]
}).initializeConfiguration({
    // @ts-ignore
    baseURL: `http://localhost:8089/api/version`,
    versionPlaceholder: "version",
    version: "v1",
}).instantiation()


export const http = service.getAxios()


export interface PagingParameters {
    pageNo: number
    pageSize: number
}

export interface Response<T> {
    msg: string
    code: number
    data: T
}


export interface ListResponse<T> {
    list: T
    total: number
}
