/**
 * 性能监控中的性能长任务的类型接口。
 *
 * @public
 */
export interface PerformanceLongTaskTypes {
    name: string
    entryType: string
    startTime: number
    duration: number
    attribution: Attribution[]
    jsHeapSizeLimit: number
    totalJSHeapSize: number
    usedJSHeapSize: number
}


/**
 * 表示性能监控中的性能资源的接口。
 * @public
 */
export interface PerformanceResource {
    /** 资源的名称。 */
    name: string;

    /** 资源所属的 entry 类型。 */
    entryType: string;

    /** 资源的起始时间。 */
    startTime: number;

    /** 资源的持续时间。 */
    duration: number;

    /** 资源的启动者类型。 */
    initiatorType: string;

    /** 传输的类型。 */
    deliveryType: string;

    /** 下一个跳转的协议。 */
    nextHopProtocol: string;

    /** 渲染阻塞状态。 */
    renderBlockingStatus: string;

    /** Worker 的启动时间。 */
    workerStart: number;

    /** 重定向开始时间。 */
    redirectStart: number;

    /** 重定向结束时间。 */
    redirectEnd: number;

    /** 抓取开始时间。 */
    fetchStart: number;

    /** 域名查询开始时间。 */
    domainLookupStart: number;

    /** 域名查询结束时间。 */
    domainLookupEnd: number;

    /** 连接开始时间。 */
    connectStart: number;

    /** 安全连接开始时间。 */
    secureConnectionStart: number;

    /** 连接结束时间。 */
    connectEnd: number;

    /** 请求开始时间。 */
    requestStart: number;

    /** 响应开始时间。 */
    responseStart: number;

    /** 第一个中间响应的开始时间。 */
    firstInterimResponseStart: number;

    /** 响应结束时间。 */
    responseEnd: number;

    /** 传输的大小。 */
    transferSize: number;

    /** 编码体的大小。 */
    encodedBodySize: number;

    /** 解码体的大小。 */
    decodedBodySize: number;

    /** 响应状态码。 */
    responseStatus: number;

    /** 服务器计时。 */
    serverTiming: any[];

    /** JavaScript 堆内存大小的限制。 */
    jsHeapSizeLimit: number;

    /** JavaScript 堆的总大小。 */
    totalJSHeapSize: number;

    /** JavaScript 堆的已使用大小。 */
    usedJSHeapSize: number;
}

export interface PerformanceVisibilityState {
    name: string
    entryType: string
    startTime: number
    duration: number
    jsHeapSizeLimit: number
    totalJSHeapSize: number
    usedJSHeapSize: number
}

/**
 * 表示性能监控中的导航性能的接口。
 * @public
 */
export interface PerformanceNavigation {
    /** 导航性能的名称。 */
    name: string;

    /** 导航性能所属的 entry 类型。 */
    entryType: string;

    /** 导航性能的起始时间。 */
    startTime: number;

    /** 导航性能的持续时间。 */
    duration: number;

    /** 导航性能的启动者类型。 */
    initiatorType: string;

    /** 传输的类型。 */
    deliveryType: string;

    /** 下一个跳转的协议。 */
    nextHopProtocol: string;

    /** 渲染阻塞状态。 */
    renderBlockingStatus: string;

    /** Worker 的启动时间。 */
    workerStart: number;

    /** 重定向开始时间。 */
    redirectStart: number;

    /** 重定向结束时间。 */
    redirectEnd: number;

    /** 抓取开始时间。 */
    fetchStart: number;

    /** 域名查询开始时间。 */
    domainLookupStart: number;

    /** 域名查询结束时间。 */
    domainLookupEnd: number;

    /** 连接开始时间。 */
    connectStart: number;

    /** 安全连接开始时间。 */
    secureConnectionStart: number;

    /** 连接结束时间。 */
    connectEnd: number;

    /** 请求开始时间。 */
    requestStart: number;

    /** 响应开始时间。 */
    responseStart: number;

    /** 第一个中间响应的开始时间。 */
    firstInterimResponseStart: number;

    /** 响应结束时间。 */
    responseEnd: number;

    /** 传输的大小。 */
    transferSize: number;

    /** 编码体的大小。 */
    encodedBodySize: number;

    /** 解码体的大小。 */
    decodedBodySize: number;

    /** 响应状态码。 */
    responseStatus: number;

    /** 服务器计时。 */
    serverTiming: any[];

    /** 卸载事件的开始时间。 */
    unloadEventStart: number;

    /** 卸载事件的结束时间。 */
    unloadEventEnd: number;

    /** DOM 可交互的时间。 */
    domInteractive: number;

    /** DOMContentLoaded 事件开始时间。 */
    domContentLoadedEventStart: number;

    /** DOMContentLoaded 事件结束时间。 */
    domContentLoadedEventEnd: number;

    /** DOM 完成的时间。 */
    domComplete: number;

    /** 页面加载事件开始时间。 */
    loadEventStart: number;

    /** 页面加载事件结束时间。 */
    loadEventEnd: number;

    /** 导航类型。 */
    type: string;

    /** 重定向次数。 */
    redirectCount: number;

    /** 激活的开始时间。 */
    activationStart: number;

    /** 临界内容渲染重启时间。 */
    criticalCHRestart: number;

    /** JavaScript 堆内存大小的限制。 */
    jsHeapSizeLimit: number;

    /** JavaScript 堆的总大小。 */
    totalJSHeapSize: number;

    /** JavaScript 堆的已使用大小。 */
    usedJSHeapSize: number;
}


/**
 *
 * 性能监控中的性能长任务的属性接口。
 *
 * @public
 *
 */
export interface Attribution {
    name: string
    entryType: string
    /**
     * 属性的起始时间。
     *
     * @public
     *
     * */
    startTime: number
    /** 属性的持续时间。
     *
     * @public
     *  */
    duration: number
    /** 容器的类型。
     *
     * @public
     * */
    containerType: string
    /** 容器的来源。
     *
     * @public
     * */
    containerSrc: string
    /** 容器的 ID。
     *
     * @public
     * */
    containerId: string
    /** 容器的名称。
     *
     * @public
     * */
    containerName: string
}
