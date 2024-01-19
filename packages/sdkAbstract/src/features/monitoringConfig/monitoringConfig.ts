import {TriggerLevelImplType} from "../errorInformation/triggerLevel";

/**
 * 表示前端监控配置的接口。
 *
 * @public
 */
export abstract class MonitoringConfigImpl {

    /** 是否启用错误监控(可用)。
     *
     * @defaultValue true
     *
     * @public */
    abstract errorTrackingEnabled: boolean;

    abstract getErrorTrackingEnabled(): boolean;

    abstract setErrorTrackingEnabled(value: boolean): this;


    /** 错误采样率，确定收集多少错误。 @public */
    abstract errorSamplingRate: number;

    abstract getErrorSamplingRate(): number;

    abstract setErrorSamplingRate(value: number): this;


    /** 是否启用性能监控(可用)。
     *
     * @defaultValue true
     *
     * @public */
    abstract performanceTrackingEnabled: boolean;

    abstract getPerformanceTrackingEnabled(): boolean;

    abstract setPerformanceTrackingEnabled(value: boolean): this;


    /** 性能采样率，确定收集多少性能数据。 @public */
    abstract performanceSamplingRate: number;

    abstract getPerformanceSamplingRate(): number;

    abstract setPerformanceSamplingRate(value: number): this;


    /** 监控日志的级别，例如 DEBUG、INFO、WARN、ERROR。 @public */
    abstract logLevel: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

    abstract getLogLevel(): 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

    abstract setLogLevel(value: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'): this;


    /**
     * 报告数据的终端/接口地址。(可用)
     *
     *
     * @defaultValue http://localhost:8089/api/version
     *
     * @public
     * */
    abstract reportingEndpoint: string;

    abstract getReportingEndpoint(): string;

    abstract setReportingEndpoint(value: string): this;


    /**
     * 报告数据的时间间隔(ms)。 可用
     *
     * @defaultValue 1000
     *
     *  @public
     *  */
    abstract reportingInterval: number;

    abstract getReportingInterval(): number;

    abstract setReportingInterval(value: number): this;


    /**
     *
     * 报告失败时的最大重试次数。(可用)
     *
     * @defaultValue 3
     *
     * @public
     * */
    abstract maxRetries: number;

    abstract getMaxRetries(): number;

    abstract setMaxRetries(value: number): this;


    /**
     *
     * 是否捕获用户相关信息，如用户 ID、用户名等(可用)。
     *
     * @public
     * */
    abstract captureUserDetails: boolean;

    abstract getCaptureUserDetails(): boolean;

    abstract setCaptureUserDetails(value: boolean): this;


    /**
     *
     * 是否捕获设备信息，如屏幕分辨率、浏览器版本等。(可用)
     *
     *
     * @public
     * */
    abstract captureDeviceDetails: boolean;

    abstract getCaptureDeviceDetails(): boolean;

    abstract setCaptureDeviceDetails(value: boolean): this;


    /**
     *  是否捕获网络请求信息，包括请求时间、状态码等。(可用)
     *
     *  @defaultValue true
     *
     *  @public */
    abstract captureNetworkRequests: boolean;

    abstract getCaptureNetworkRequests(): boolean;

    abstract setCaptureNetworkRequests(value: boolean): this;


    /**
     * 自定义错误类型，允许开发者定义特定的错误类型进行监控。(可用)
     *
     *
     * @public
     * */
    abstract customErrorTypes: TriggerLevelImplType[];

    abstract getCustomErrorTypes(): TriggerLevelImplType[];

    abstract setCustomErrorTypes(value: TriggerLevelImplType[]): this;


    /**
     * 是否捕获跨域请求的错误。 (可用)
     *
     * @defaultValue true
     * @public
     * */
    abstract crossOriginErrorTracking: boolean;

    abstract getCrossOriginErrorTracking(): boolean;

    abstract setCrossOriginErrorTracking(value: boolean): this;


    /** 白名单，定义哪些 URL 的错误需要被监控。(可用) @public */
    abstract whitelistUrls: string[];

    abstract getWhitelistUrls(): string[];

    abstract setWhitelistUrls(value: string[]): this;


    /** 黑名单，定义哪些 URL 的错误不需要被监控。 (可用)
     * @public */
    abstract blacklistUrls: string[];

    abstract getBlacklistUrls(): string[];

    abstract setBlacklistUrls(value: string[]): this;


    /** 是否捕获用户的交互行为，如点击、输入等。 @public */
    abstract captureUserInteractions: boolean;

    abstract getCaptureUserInteractions(): boolean;

    abstract setCaptureUserInteractions(value: boolean): this;


    /**
     * 在错误发生时是否清除缓存。
     *
     *
     * @remarks
     *
     * 实时性要求高的应用： 如果你的应用要求实时性较高，用户不能看到错误或过时的数据，可以考虑在错误发生时清除缓存，以便下一次用户访问时重新获取最新的数据。
     *
     * 对用户体验要求高的应用： 有些应用在发生错误时会尽力提供良好的用户体验，通过清除缓存可以减少用户看到错误页面的可能性。
     *
     * 缓存数据可能导致错误： 如果你的错误是与缓存数据相关的，并且你认为清除缓存可以解决或减少这类错误，那么这个配置就是有意义的。
     *
     * @public */
    abstract clearCacheOnError: boolean;

    abstract getClearCacheOnError(): boolean;

    abstract setClearCacheOnError(value: boolean): this;

}
