import { ServiceUtils } from '../../../../memo/service/service';
export declare const service: ServiceUtils<object>;
export declare const http: <R>(req: import("../../../../memo/service/service").initializeConfigurationTypes & object) => Promise<R>;
export interface PagingParameters {
    pageNo: number;
    pageSize: number;
}
export interface Response<T> {
    msg: string;
    code: number;
    data: T;
}
export interface ListResponse<T> {
    list: T;
    total: number;
}
