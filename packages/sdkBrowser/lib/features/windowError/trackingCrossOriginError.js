"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingCrossOriginError = void 0;
const sdk_abstract_1 = require("@memo28.monitoring/sdk-abstract");
const network_1 = require("../autoInfo/network");
const dayjs_1 = __importDefault(require("dayjs"));
const originalXMLHttpRequest = window.XMLHttpRequest;
function rewriteHttpRequest(corsCallback) {
    return function () {
        // 创建原始 XMLHttpRequest 对象的实例
        const xhr = new originalXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.status === 0 && xhr.readyState === 4) {
                // 检查是否有 CORS 头信息
                const corsHeader = xhr.getResponseHeader('Access-Control-Allow-Origin');
                // 获取响应头信息
                if (!corsHeader)
                    corsCallback === null || corsCallback === void 0 ? void 0 : corsCallback();
            }
        };
        return xhr;
    };
}
class TrackingCrossOriginError extends sdk_abstract_1.HandlingBasicErrors {
    constructor(config, trackingCallback) {
        super(config);
        this.trackingCallback = trackingCallback;
        if (!(config === null || config === void 0 ? void 0 : config.getCrossOriginErrorTracking()))
            return;
        if (!(config === null || config === void 0 ? void 0 : config.getCustomErrorTypes().includes('cross domain')))
            return;
        this.rewriteHttp(() => {
            var _a, _b;
            if (config === null || config === void 0 ? void 0 : config.getCaptureNetworkRequests())
                new network_1.AutoNetWork(this, new network_1.Network());
            this.setMessage('a cross-domain error occurred');
            this.setType('cross domain');
            this.setCreateTime((0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"));
            (_b = (_a = this.trackingCallback) === null || _a === void 0 ? void 0 : _a.listening) === null || _b === void 0 ? void 0 : _b.call(_a, this);
        });
    }
    rewriteHttp(callback) {
        // @ts-ignore
        window.XMLHttpRequest = rewriteHttpRequest(callback);
    }
    setMessage(msg) {
        const error = new Error(msg);
        error.stack && this.setStack(error.stack);
        return super.setMessage(msg);
    }
}
exports.TrackingCrossOriginError = TrackingCrossOriginError;
