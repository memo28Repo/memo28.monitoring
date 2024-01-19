"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitoring = void 0;
class Monitoring {
    constructor() {
        this.blacklistUrls = [];
        this.captureDeviceDetails = true;
        this.captureNetworkRequests = true;
        this.captureUserDetails = true;
        this.captureUserInteractions = false;
        this.clearCacheOnError = false;
        this.crossOriginErrorTracking = true;
        this.customErrorTypes = ['window.error', 'unhandledrejection', 'user-defined', 'cross domain'];
        this.errorSamplingRate = 1;
        this.errorTrackingEnabled = true;
        this.logLevel = 'DEBUG';
        this.maxRetries = 3;
        this.performanceSamplingRate = 0;
        this.performanceTrackingEnabled = true;
        this.reportingEndpoint = '';
        this.reportingInterval = 1000;
        this.whitelistUrls = [];
    }
    getBlacklistUrls() {
        return this.blacklistUrls;
    }
    getCaptureDeviceDetails() {
        return this.captureDeviceDetails;
    }
    getCaptureNetworkRequests() {
        return this.captureNetworkRequests;
    }
    getCaptureUserDetails() {
        return this.captureUserDetails;
    }
    getCaptureUserInteractions() {
        return this.captureUserInteractions;
    }
    getCrossOriginErrorTracking() {
        return this.crossOriginErrorTracking;
    }
    getCustomErrorTypes() {
        return this.customErrorTypes;
    }
    getErrorSamplingRate() {
        return this.errorSamplingRate;
    }
    getErrorTrackingEnabled() {
        return this.errorTrackingEnabled;
    }
    getLogLevel() {
        return this.logLevel;
    }
    getMaxRetries() {
        return this.maxRetries;
    }
    getPerformanceSamplingRate() {
        return this.performanceSamplingRate;
    }
    getPerformanceTrackingEnabled() {
        return this.performanceTrackingEnabled;
    }
    getReportingEndpoint() {
        return this.reportingEndpoint;
    }
    getReportingInterval() {
        return this.reportingInterval;
    }
    getWhitelistUrls() {
        return this.whitelistUrls;
    }
    setBlacklistUrls(value) {
        this.blacklistUrls = value;
        return this;
    }
    setCaptureDeviceDetails(value) {
        this.captureDeviceDetails = value;
        return this;
    }
    setCaptureNetworkRequests(value) {
        this.captureNetworkRequests = value;
        return this;
    }
    setCaptureUserDetails(value) {
        this.captureUserDetails = value;
        return this;
    }
    setCaptureUserInteractions(value) {
        this.captureUserInteractions = value;
        return this;
    }
    setCrossOriginErrorTracking(value) {
        this.crossOriginErrorTracking = value;
        return this;
    }
    setCustomErrorTypes(value) {
        this.customErrorTypes = value;
        return this;
    }
    setErrorSamplingRate(value) {
        this.errorSamplingRate = value;
        return this;
    }
    setErrorTrackingEnabled(value) {
        this.errorTrackingEnabled = value;
        return this;
    }
    setLogLevel(value) {
        this.logLevel = value;
        return this;
    }
    setMaxRetries(value) {
        this.maxRetries = value;
        return this;
    }
    setPerformanceSamplingRate(value) {
        this.performanceSamplingRate = value;
        return this;
    }
    setPerformanceTrackingEnabled(value) {
        this.performanceTrackingEnabled = value;
        return this;
    }
    setReportingEndpoint(value) {
        this.reportingEndpoint = value;
        return this;
    }
    setReportingInterval(value) {
        this.reportingInterval = value;
        return this;
    }
    setWhitelistUrls(value) {
        this.whitelistUrls = value;
        return this;
    }
    getClearCacheOnError() {
        return this.clearCacheOnError;
    }
    setClearCacheOnError(value) {
        this.clearCacheOnError = value;
        return this;
    }
}
exports.Monitoring = Monitoring;
