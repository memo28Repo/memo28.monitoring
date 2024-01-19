"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Run = void 0;
const trackingWindowError_1 = require("../windowError/trackingWindowError");
const trackingUnhandledrejection_1 = require("../windowError/trackingUnhandledrejection");
const trackingUserInteractionEvent_1 = require("../windowError/trackingUserInteractionEvent");
const trackingCrossOriginError_1 = require("../windowError/trackingCrossOriginError");
const service_1 = require("@memo28.monitoring/service");
const trackingCallback_1 = require("../windowError/trackingCallback");
const trackingPerformance_1 = require("../windowError/trackingPerformance");
class Run {
    constructor(config) {
        this.config = config;
        if (!config.getReportingEndpoint().trim().length) {
            throw new Error("reportingEndpoint 字段不能为空");
        }
        new trackingPerformance_1.TrackingPerformance(config, new trackingCallback_1.TrackingCallback({
            config, listening(target, triggerListening) {
                (0, service_1.createErrorLog)({
                    // @ts-ignore
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if ((0, service_1.isAxiosError)(res))
                        triggerListening(target);
                }).catch(() => {
                    triggerListening(target);
                });
            },
        }));
        new trackingWindowError_1.TrackingWindowError(config, new trackingCallback_1.TrackingCallback({
            config, listening(target, triggerListening) {
                (0, service_1.createErrorLog)({
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if ((0, service_1.isAxiosError)(res))
                        triggerListening(target);
                }).catch(() => {
                    triggerListening(target);
                });
            },
        }));
        new trackingUnhandledrejection_1.TrackingUnhandledrejection(config, new trackingCallback_1.TrackingCallback({
            config, listening(target, triggerListening) {
                (0, service_1.createErrorLog)({
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    if ((0, service_1.isAxiosError)(res))
                        triggerListening(target);
                }).catch(() => {
                    triggerListening(target);
                });
            },
        }));
        new trackingCrossOriginError_1.TrackingCrossOriginError(config, new trackingCallback_1.TrackingCallback({
            config, listening(target) {
                (0, service_1.createErrorLog)({
                    data: JSON.parse(JSON.stringify(target))
                });
            },
        }));
    }
    getTrackingUserInteractionEvent() {
        return new trackingUserInteractionEvent_1.TrackingUserInteractionEvent(this.config);
    }
}
exports.Run = Run;
