"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingUnhandledrejection = void 0;
const sdk_abstract_1 = require("@memo28.monitoring/sdk-abstract");
const dayjs_1 = __importDefault(require("dayjs"));
const network_1 = require("../autoInfo/network");
/**
 * 捕捉未处理的 Promise rejection 错误。
 *
 *
 * 建议Promise.reject 时 应该传递一个error对象，而不是字符串。 这样能够获取到更多有用信息
 *
 * 例如：
 *
 * ```js
 * Promise.reject(new Error('error message'))
 * ```
 *
 *
 * @public
 */
class TrackingUnhandledrejection extends sdk_abstract_1.HandlingBasicErrors {
    constructor(config, trackingCallback) {
        var _a;
        super(config);
        this.trackingCallback = trackingCallback;
        this.userConfig = config;
        // 如果未提供配置或未启用错误追踪，则直接返回
        if (!((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.errorTrackingEnabled))
            return;
        if (!this.userConfig.customErrorTypes.includes('unhandledrejection'))
            return;
        // 监听未处理的 Promise rejection 错误
        window.addEventListener('unhandledrejection', (event) => {
            var _a, _b, _c;
            const reason = event.reason;
            // 检查 reason 是否为 Error 对象
            if (reason instanceof Error) {
                this.setMessage(reason.message || '');
                this.setStack(reason.stack || '');
            }
            else if (typeof reason === 'string') {
                // 如果 reason 是字符串，直接作为消息处理
                this.setMessage(reason);
            }
            else {
                // 如果无法确定错误消息，使用默认消息
                this.setMessage('Unhandled Promise Rejection');
            }
            this.setType('unhandledrejection');
            this.setKind('stableTrigger');
            this.setCreateTime((0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"));
            if ((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.getCaptureNetworkRequests()) {
                new network_1.AutoNetWork(this, new network_1.Network());
            }
            (_c = (_b = this.trackingCallback) === null || _b === void 0 ? void 0 : _b.listening) === null || _c === void 0 ? void 0 : _c.call(_b, this);
        });
    }
}
exports.TrackingUnhandledrejection = TrackingUnhandledrejection;
