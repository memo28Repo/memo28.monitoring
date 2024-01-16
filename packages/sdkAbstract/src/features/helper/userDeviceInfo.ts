import {UserDeviceInfoImpl} from "../../index";

export class UserDeviceInfo implements UserDeviceInfoImpl {

    createTime: string = ''

    browserLanguage?: string | undefined;

    isTouchDevice?: boolean | undefined;

    isMobile?: boolean;

    deviceOrientation?: string | undefined;

    userAgent?: string | undefined;

    screenWidth?: number | undefined;

    screenHeight?: number | undefined;

    getCreateTime(): string {
        return this.createTime;
    }

    setCreateTime(time: string): this {
        this.createTime = time
        return this;
    }


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

    getBrowserLanguage(): string {
        return this.browserLanguage || '';
    }

    getDeviceOrientation(): string {
        return this.deviceOrientation || '';
    }

    getIsMobile(): boolean {
        return this.isMobile || false;
    }

    getIsTouchDevice(): boolean {
        return this.isTouchDevice || false;
    }

    getScreenHeight(): number {
        return this.screenHeight || 0;
    }

    getScreenWidth(): number {
        return this.screenWidth || 0;
    }

    getUserAgent(): string {
        return this.userAgent || '';
    }

    setBrowserLanguage(value: string): this {
        this.browserLanguage = value
        return this;
    }

    setDeviceOrientation(value: string): this {
        this.deviceOrientation = value
        return this;
    }

    setIsMobile(value: boolean): this {
        this.isMobile = value
        return this;
    }

    setIsTouchDevice(value: boolean): this {
        this.isTouchDevice = value
        return this;
    }

    setScreenHeight(value: number): this {
        this.screenHeight = value
        return this;
    }

    setScreenWidth(value: number): this {
        this.screenWidth = value
        return this;
    }

    setUserAgent(value: string): this {
        this.userAgent = value
        return this;
    }

}
