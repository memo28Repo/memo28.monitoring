"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingWindowError = void 0;
const sdk_abstract_1 = require("@memo28.monitoring/sdk-abstract");
const dayjs_1 = __importDefault(require("dayjs"));
const network_1 = require("../autoInfo/network");
/**
 *
 * power
 *
 * 捕捉运行时错误： 这包括由无效的 JavaScript 语法、未定义的变量、类型错误等导致的错误。
 *
 * 跨域脚本错误（Cross-origin Script Errors）：
 * 如果在 <script> 标签中引入的脚本发生错误，并且该脚本位于不同的域，也会触发 window.onerror 事件。
 * 这通常会导致 "Script error." 的错误消息，
 * 因为浏览器出于安全原因不会提供详细的错误信息。
 *
 * <!-- 例子：跨域脚本错误 -->
 * <script src="https://example.com/external-script.js"></script>
 *
 *
 * @public
 *
 */
class TrackingWindowError extends sdk_abstract_1.HandlingBasicErrors {
    constructor(userConfigs, trackingCallback) {
        var _a;
        super(userConfigs);
        this.trackingCallback = trackingCallback;
        this.userConfig = userConfigs;
        if (!((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.errorTrackingEnabled))
            return;
        if (!this.userConfig.customErrorTypes.includes('window.error'))
            return;
        window.addEventListener('error', (event) => {
            var _a, _b, _c;
            this.setMessage(event.message);
            if (event.error)
                this.setStack(((_a = event.error) === null || _a === void 0 ? void 0 : _a.stack) || '');
            this.setLineno(event.lineno);
            this.setColno(event.colno);
            this.setKind('stableTrigger');
            this.setType('window.error');
            this.setCreateTime((0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"));
            if ((_b = this.userConfig) === null || _b === void 0 ? void 0 : _b.getCaptureNetworkRequests())
                new network_1.AutoNetWork(this, new network_1.Network());
            (_c = trackingCallback === null || trackingCallback === void 0 ? void 0 : trackingCallback.listening) === null || _c === void 0 ? void 0 : _c.call(trackingCallback, this);
        });
    }
}
exports.TrackingWindowError = TrackingWindowError;
