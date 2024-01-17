"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingCallback = void 0;
class TrackingCallback {
    constructor(options) {
        var _a;
        this.options = options;
        this.retriesConst = 0;
        this.retriesConst = ((_a = this.options.config) === null || _a === void 0 ? void 0 : _a.getMaxRetries()) || 0;
    }
    listening(target) {
        var _a, _b, _c, _d;
        let retries = ((_a = this.options.config) === null || _a === void 0 ? void 0 : _a.getMaxRetries()) || 0;
        if (retries <= 0) {
            (_b = this.options.config) === null || _b === void 0 ? void 0 : _b.setMaxRetries(this.retriesConst);
            return this;
        }
        (_c = this.options.config) === null || _c === void 0 ? void 0 : _c.setMaxRetries(retries - 1);
        let clearTimeoutId = setTimeout(() => {
            var _a, _b;
            (_b = (_a = this.options).listening) === null || _b === void 0 ? void 0 : _b.call(_a, target);
            clearTimeout(clearTimeoutId);
        }, (_d = this.options.config) === null || _d === void 0 ? void 0 : _d.getReportingInterval());
        return this;
    }
}
exports.TrackingCallback = TrackingCallback;
