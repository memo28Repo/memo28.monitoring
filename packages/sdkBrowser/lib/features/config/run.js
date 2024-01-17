"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Run = void 0;
const trackingWindowError_1 = require("../windowError/trackingWindowError");
const trackingUnhandledrejection_1 = require("../windowError/trackingUnhandledrejection");
const trackingUserInteractionEvent_1 = require("../windowError/trackingUserInteractionEvent");
const service_1 = require("@memo28.monitoring/service");
const trackingCallback_1 = require("../windowError/trackingCallback");
class Run {
    constructor(config) {
        this.config = config;
        new trackingWindowError_1.TrackingWindowError(config, new trackingCallback_1.TrackingCallback({
            config, listening(target) {
                (0, service_1.createErrorLog)({
                    data: JSON.parse(JSON.stringify(target))
                });
            },
        }));
        new trackingUnhandledrejection_1.TrackingUnhandledrejection(config, new trackingCallback_1.TrackingCallback({
            config, listening(target) {
                (0, service_1.createErrorLog)({
                    data: JSON.parse(JSON.stringify(target))
                }).then(res => {
                    console.log('then', res);
                });
            },
        }));
        // new TrackingCrossOriginError(config, new TrackingCallback({
        //     config, listening(target) {
        //         createErrorLog({
        //             data: JSON.parse(JSON.stringify(target))
        //         })
        //     },
        // }))
    }
    getTrackingUserInteractionEvent() {
        return new trackingUserInteractionEvent_1.TrackingUserInteractionEvent(this.config);
    }
}
exports.Run = Run;
