export declare const http: <R>(req: import("@memo28/service").initializeConfigurationTypes & object) => Promise<R>;
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
