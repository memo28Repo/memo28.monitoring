import {UserDeviceInfoImpl} from "@memo28.monitoring/sdk-abstract";
import {MonitoringConfigImpl} from "@memo28.monitoring/sdk-abstract";


export class UserDeviceInfoUniApp implements UserDeviceInfoImpl {

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


    private config?: MonitoringConfigImpl

    constructor(config?: MonitoringConfigImpl) {
        this.config = config
        // 不获取用户所有信息
        if (!this.config?.getCaptureUserDetails()) return
        this.getSystemInfo()
    }

    getSystemInfo() {
        const systemInfoSync = uni.getSystemInfoSync();
        this.setUserAgent(JSON.stringify(systemInfoSync))
        this.setIsMobile(true)
        this.setIsTouchDevice(true)
        this.setBrowserLanguage(systemInfoSync.osLanguage || '')
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
