import {MonitoringConfigImpl, TriggerLevelImplType} from "@memo28.monitoring/sdk-abstract";

export class Monitoring implements MonitoringConfigImpl {
    blacklistUrls: string[] = [];
    captureDeviceDetails: boolean = true;
    captureNetworkRequests: boolean = true;
    captureUserDetails: boolean = true;
    captureUserInteractions: boolean = false;
    clearCacheOnError: boolean = false;
    crossOriginErrorTracking: boolean = true;
    customErrorTypes: TriggerLevelImplType[] = ['window.error', 'unhandledrejection', 'user-defined', 'cross domain'];
    errorSamplingRate: number = 1;
    errorTrackingEnabled: boolean = true;
    logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR" = 'DEBUG';
    maxRetries: number = 3;
    performanceSamplingRate: number = 0;
    performanceTrackingEnabled: boolean = true;
    reportingEndpoint: string = 'http://localhost:8089/api/version';
    reportingInterval: number = 1000;
    whitelistUrls: string[] = [];

    getBlacklistUrls(): string[] {
        return this.blacklistUrls;
    }

    getCaptureDeviceDetails(): boolean {
        return this.captureDeviceDetails;
    }

    getCaptureNetworkRequests(): boolean {
        return this.captureNetworkRequests;
    }

    getCaptureUserDetails(): boolean {
        return this.captureUserDetails;
    }

    getCaptureUserInteractions(): boolean {
        return this.captureUserInteractions;
    }

    getCrossOriginErrorTracking(): boolean {
        return this.crossOriginErrorTracking;
    }

    getCustomErrorTypes(): TriggerLevelImplType[] {
        return this.customErrorTypes;
    }

    getErrorSamplingRate(): number {
        return this.errorSamplingRate;
    }

    getErrorTrackingEnabled(): boolean {
        return this.errorTrackingEnabled;
    }

    getLogLevel(): "DEBUG" | "INFO" | "WARN" | "ERROR" {
        return this.logLevel;
    }

    getMaxRetries(): number {
        return this.maxRetries;
    }

    getPerformanceSamplingRate(): number {
        return this.performanceSamplingRate;
    }

    getPerformanceTrackingEnabled(): boolean {
        return this.performanceTrackingEnabled;
    }

    getReportingEndpoint(): string {
        return this.reportingEndpoint;
    }

    getReportingInterval(): number {
        return this.reportingInterval;
    }

    getWhitelistUrls(): string[] {
        return this.whitelistUrls;
    }

    setBlacklistUrls(value: string[]): this {
        this.blacklistUrls = value;
        return this;
    }

    setCaptureDeviceDetails(value: boolean): this {
        this.captureDeviceDetails = value;
        return this;
    }

    setCaptureNetworkRequests(value: boolean): this {
        this.captureNetworkRequests = value;
        return this;
    }

    setCaptureUserDetails(value: boolean): this {
        this.captureUserDetails = value;
        return this;
    }

    setCaptureUserInteractions(value: boolean): this {
        this.captureUserInteractions = value;
        return this;
    }

    setCrossOriginErrorTracking(value: boolean): this {
        this.crossOriginErrorTracking = value;
        return this;
    }

    setCustomErrorTypes(value: TriggerLevelImplType[]): this {
        this.customErrorTypes = value;
        return this;
    }

    setErrorSamplingRate(value: number): this {
        this.errorSamplingRate = value;
        return this;
    }

    setErrorTrackingEnabled(value: boolean): this {
        this.errorTrackingEnabled = value;
        return this;
    }

    setLogLevel(value: "DEBUG" | "INFO" | "WARN" | "ERROR"): this {
        this.logLevel = value;
        return this;
    }

    setMaxRetries(value: number): this {
        this.maxRetries = value;
        return this;
    }

    setPerformanceSamplingRate(value: number): this {
        this.performanceSamplingRate = value;
        return this;
    }

    setPerformanceTrackingEnabled(value: boolean): this {
        this.performanceTrackingEnabled = value;
        return this;
    }

    setReportingEndpoint(value: string): this {
        this.reportingEndpoint = value;
        return this;
    }

    setReportingInterval(value: number): this {
        this.reportingInterval = value;
        return this;
    }

    setWhitelistUrls(value: string[]): this {
        this.whitelistUrls = value;
        return this;
    }

    getClearCacheOnError(): boolean {
        return this.clearCacheOnError;
    }

    setClearCacheOnError(value: boolean): this {
        this.clearCacheOnError = value
        return this;
    }
}
