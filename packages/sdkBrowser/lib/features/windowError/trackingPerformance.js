"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingPerformance = void 0;
const sdk_abstract_1 = require("@memo28.monitoring/sdk-abstract");
const performance_1 = require("./performance");
const network_1 = require("../autoInfo/network");
class TrackingPerformance extends sdk_abstract_1.HandlingBasicErrors {
    constructor(config, trackingCallback) {
        super(config);
        this.trackingCallback = trackingCallback;
        if (!(config === null || config === void 0 ? void 0 : config.getPerformanceTrackingEnabled()))
            return;
        this.setType('performance');
        if (config === null || config === void 0 ? void 0 : config.getCaptureNetworkRequests())
            new network_1.AutoNetWork(this, new network_1.Network());
        new performance_1.PerformanceUtils().observer((el) => {
            var _a;
            // @ts-ignore
            (_a = trackingCallback === null || trackingCallback === void 0 ? void 0 : trackingCallback.listening) === null || _a === void 0 ? void 0 : _a.call(trackingCallback, Object.assign({}, this, el));
        });
    }
}
exports.TrackingPerformance = TrackingPerformance;
