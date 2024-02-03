import {HandlingBasicErrors, MonitoringConfigImpl, TrackingCallback} from "@memo28.monitoring/sdk-abstract";
import {AutoNetWork, Network} from "../autoInfo/network";
import dayjs from "dayjs";
import {trackingCallbackType} from "./trackingCallback";


const originalXMLHttpRequest = window.XMLHttpRequest;

export function rewriteHttpRequest(corsCallback?: () => void, statusCallback?: (status: number, readyStatus: number, xhr: XMLHttpRequest) => void) {

    return function () {
        // 创建原始 XMLHttpRequest 对象的实例
        const xhr = new originalXMLHttpRequest()


        xhr.onreadystatechange = function () {
            statusCallback?.(xhr.status, xhr.readyState, xhr)

            if (xhr.status === 0 && xhr.readyState === 4) {
                // 检查是否有 CORS 头信息
                const corsHeader = xhr.getResponseHeader('Access-Control-Allow-Origin');
                // 获取响应头信息
                if (!corsHeader) corsCallback?.()
            }
        }

        return xhr
    }
}


// 判断是否在黑名单中的函数
export function isUrlInlist(url: string, blacklist: string[]): boolean {
    if (!url.trim()) return true
    return blacklist.some(item => {
        return item.trim().indexOf(url.trim()) !== -1 || url.trim().indexOf(item.trim()) !== -1
    });
}

export class TrackingCrossOriginError extends HandlingBasicErrors {

    constructor(config?: MonitoringConfigImpl, private trackingCallback?: TrackingCallback<trackingCallbackType>) {
        super(config);

        if (!config?.getCrossOriginErrorTracking()) return
        if (!config?.getCustomErrorTypes().includes('cross domain')) return

        this.rewriteHttp(() => {
            if (config?.getCaptureNetworkRequests()) new AutoNetWork(this, new Network())
            this.setMessage('a cross-domain error occurred')
            this.setType('cross domain')
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
            this.trackingCallback?.listening?.(this)
        }, (status, readyStatus, xhr) => {
            if (readyStatus !== 4) return
            // 属于黑名单的url则不监控
            if (isUrlInlist(xhr.responseURL, config?.getBlacklistUrls())) {
                return
            }

            // 不属于白名单的也直接不监控
            if (!isUrlInlist(xhr.responseURL, config?.getWhitelistUrls())) {
                return
            }

            const httpMapper = {
                100: new Error('Continue: 服务器已收到请求的头部，客户端应该继续发送请求的其余部分。'),
                101: new Error('Switching Protocols: 服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议切换连接.'),

                201: new Error('Created: 请求已经被实现，而且有一个新的资源已经依据请求的需要而建立.'),
                202: new Error('Accepted: 服务器已接受请求，但尚未处理完成.'),
                203: new Error('Non-Authoritative Information: 服务器已成功处理了请求，但返回的信息可能来自另一来源.'),
                204: new Error('No Content: 服务器成功处理了请求，但没有返回任何内容。通常在更新资源时使用.'),
                205: new Error('Reset Content: 服务器成功处理了请求，但要求客户端重置文档视图.'),
                206: new Error('Partial Content: 服务器已经成功处理了部分GET请求.'),


                300: new Error('Multiple Choices: 客户端请求的资源有多种表示形式，服务器可以根据请求者选择一个.'),
                301: new Error('Moved Permanently: 请求的资源已被永久移动到新的位置.'),
                302: new Error('Found: 请求的资源临时从不同的URI响应请求。使用该状态码的请求应使用GET方法重定向.'),
                303: new Error('See Other: 资源的URI已更改，应使用新的URI来访问.'),
                304: new Error('Not Modified: 资源未被修改，可以使用客户端缓存的版本.'),
                305: new Error('Use Proxy: 请求者只能使用代理访问请求的资源.'),
                306: new Error('(Unused): 该状态码已经不再被使用，但是仍然被保留.'),
                307: new Error('Temporary Redirect: 临时重定向，类似于302，但要求使用相同的请求方法.'),

                400: new Error('Bad Request: 请求无效，服务器无法理解.'),
                401: new Error('Unauthorized: 请求要求用户的身份认证.'),
                402: new Error('Payment Required: 保留，将来使用.'),
                403: new Error('Forbidden: 服务器理解请求，但拒绝执行.'),
                404: new Error('Not Found: 服务器找不到请求的资源.'),
                405: new Error('Method Not Allowed: 请求中指定的方法不被允许.'),
                406: new Error('Not Acceptable: 服务器无法根据客户端请求的内容特性完成请求.'),
                407: new Error('Proxy Authentication Required: 要求进行代理身份验证.'),
                408: new Error('Request Timeout: 请求超时.'),
                409: new Error('Conflict: 请求冲突，通常由于资源状态冲突引起.'),
                410: new Error('Gone: 请求的资源已经不存在.'),
                411: new Error('Length Required: 缺少请求头Content-Length.'),
                412: new Error('Precondition Failed: 请求头中指定的一些前提条件失败.'),
                413: new Error('Payload Too Large: 请求的实体过大，服务器无法处理.'),
                414: new Error('URI Too Long: 请求的URI过长，服务器无法处理.'),
                415: new Error('Unsupported Media Type: 不支持请求中的媒体类型.'),
                416: new Error('Range Not Satisfiable: 服务器不能满足请求中的Range头字段.'),
                417: new Error('Expectation Failed: 服务器无法满足Expect头字段的要求.'),
                418: new Error('I\'m a teapot: 服务器拒绝尝试用茶壶冲泡咖啡.'),
                421: new Error('Misdirected Request: 服务器无法产生适合请求所要求的重定向响应.'),
                422: new Error('Unprocessable Entity: 请求格式正确，但是由于含有语义错误，无法响应.'),
                423: new Error('Locked: 当前资源被锁定.'),
                424: new Error('Failed Dependency: 由于之前的请求失败，导致当前请求失败.'),
                426: new Error('Upgrade Required: 客户端应当切换到TLS/1.0.'),
                428: new Error('Precondition Required: 请求要求先决条件.'),
                429: new Error('Too Many Requests: 客户端发送的请求过多.'),
                431: new Error('Request Header Fields Too Large: 请求头字段太大，服务器无法处理.'),

                500: new Error('Internal Server Error: 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理.'),
                501: new Error('Not Implemented: 服务器不支持当前请求所需要的某个功能.'),
                502: new Error('Bad Gateway: 作为网关或代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应.'),
                503: new Error('Service Unavailable: 服务器当前无法处理请求.'),
                504: new Error('Gateway Timeout: 在服务器作为网关或代理，但是没有及时从上游服务器收到请求时，超时发生.'),
                505: new Error('HTTP Version Not Supported: 服务器不支持请求中所用的HTTP协议版本.'),
                511: new Error('Network Authentication Required: 要求进行网络身份验证.'),
            }

            const error = httpMapper[status as keyof typeof httpMapper]
            this.setCreateTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
            // @ts-ignore
            this.setType('abnormal request')
            this.setMessage(error.message)
            this.trackingCallback?.listening?.(this)
        })
    }

    rewriteHttp(callback: () => void, statusCallback?: (status: number, readyStatus: number, xhr: XMLHttpRequest) => void) {
        // @ts-ignore
        window.XMLHttpRequest = rewriteHttpRequest(callback, statusCallback)
    }

    setMessage(msg: string): this {
        const error = new Error(msg);
        error.stack && this.setStack(error.stack)
        return super.setMessage(msg);
    }

}
