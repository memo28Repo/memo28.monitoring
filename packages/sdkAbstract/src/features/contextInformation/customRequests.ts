/**
 * 自定义配置请求
 *
 * 不使用sdk中的service请求 而是用户可自定义请求实例
 */
export abstract class CustomRequests {
    abstract onReport(msg: object): void
}