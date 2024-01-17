"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeviceInfo = void 0;
class UserDeviceInfo {
    getCreateTime() {
        return this.createTime;
    }
    setCreateTime(time) {
        this.createTime = time;
        return this;
    }
    constructor(config) {
        var _a, _b;
        this.createTime = '';
        this.config = config;
        // 不获取用户所有信息
        if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.getCaptureUserDetails()))
            return;
        if (typeof window !== 'undefined') {
            this.setBrowserLanguage(window.navigator.language);
            this.setUserAgent(window.navigator.userAgent);
            if (!((_b = this.config) === null || _b === void 0 ? void 0 : _b.getCaptureDeviceDetails()))
                return;
            this.setIsMobile(window.navigator.userAgent.indexOf('Mobile') > -1);
            this.setIsTouchDevice(window.navigator.maxTouchPoints > 0);
            this.setScreenWidth(window.screen.width);
            this.setScreenHeight(window.screen.height);
            // @ts-ignore
            this.setDeviceOrientation(window.orientation || window.screen.orientation && window.screen.orientation.type || window.mozOrientation || window.msOrientation);
        }
    }
    getBrowserLanguage() {
        return this.browserLanguage || '';
    }
    getDeviceOrientation() {
        return this.deviceOrientation || '';
    }
    getIsMobile() {
        return this.isMobile || false;
    }
    getIsTouchDevice() {
        return this.isTouchDevice || false;
    }
    getScreenHeight() {
        return this.screenHeight || 0;
    }
    getScreenWidth() {
        return this.screenWidth || 0;
    }
    getUserAgent() {
        return this.userAgent || '';
    }
    setBrowserLanguage(value) {
        this.browserLanguage = value;
        return this;
    }
    setDeviceOrientation(value) {
        this.deviceOrientation = value;
        return this;
    }
    setIsMobile(value) {
        this.isMobile = value;
        return this;
    }
    setIsTouchDevice(value) {
        this.isTouchDevice = value;
        return this;
    }
    setScreenHeight(value) {
        this.screenHeight = value;
        return this;
    }
    setScreenWidth(value) {
        this.screenWidth = value;
        return this;
    }
    setUserAgent(value) {
        this.userAgent = value;
        return this;
    }
}
exports.UserDeviceInfo = UserDeviceInfo;
