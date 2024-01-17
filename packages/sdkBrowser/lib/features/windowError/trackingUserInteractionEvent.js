"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingUserInteractionEvent = void 0;
const sdk_abstract_1 = require("@memo28.monitoring/sdk-abstract");
const dayjs_1 = __importDefault(require("dayjs"));
const service_1 = require("@memo28.monitoring/service");
const network_1 = require("../autoInfo/network");
class TrackingUserInteractionEvent extends sdk_abstract_1.HandlingBasicErrors {
    constructor(config) {
        var _a;
        super(config);
        this.userConfig = config;
        if (!((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.customErrorTypes.includes('user-defined')))
            return;
        this.setType('user-defined');
        this.setCreateTime((0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"));
        if (config === null || config === void 0 ? void 0 : config.getCaptureNetworkRequests())
            new network_1.AutoNetWork(this, new network_1.Network());
    }
    setMessage(msg) {
        var _a;
        if (!((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.customErrorTypes.includes('user-defined')))
            return this;
        const error = new Error(msg);
        error.stack && super.setStack(error.stack);
        return super.setMessage(msg);
    }
    done() {
        var _a;
        if (!((_a = this.userConfig) === null || _a === void 0 ? void 0 : _a.customErrorTypes.includes('user-defined')))
            return;
        (0, service_1.createErrorLog)({
            data: JSON.parse(JSON.stringify(this))
        });
    }
}
exports.TrackingUserInteractionEvent = TrackingUserInteractionEvent;
