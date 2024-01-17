"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeviceInfo = void 0;
class UserDeviceInfo {
    constructor() {
        if (typeof window !== 'undefined') {
            this.setBrowserLanguage(window.navigator.language);
            this.setIsMobile(window.navigator.userAgent.indexOf('Mobile') > -1);
            this.setIsTouchDevice(window.navigator.maxTouchPoints > 0);
            // @ts-ignore
            this.setDeviceOrientation(window.orientation || window.screen.orientation && window.screen.orientation.type || window.mozOrientation || window.msOrientation);
            this.setScreenWidth(window.screen.width);
            this.setScreenHeight(window.screen.height);
            this.setUserAgent(window.navigator.userAgent);
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
