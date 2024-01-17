import { UserDeviceInfoImpl } from "../../index";
import { MonitoringConfigImpl } from "../../index";
export declare class UserDeviceInfo implements UserDeviceInfoImpl {
    createTime: string;
    browserLanguage?: string | undefined;
    isTouchDevice?: boolean | undefined;
    isMobile?: boolean;
    deviceOrientation?: string | undefined;
    userAgent?: string | undefined;
    screenWidth?: number | undefined;
    screenHeight?: number | undefined;
    getCreateTime(): string;
    setCreateTime(time: string): this;
    private config?;
    constructor(config?: MonitoringConfigImpl);
    getBrowserLanguage(): string;
    getDeviceOrientation(): string;
    getIsMobile(): boolean;
    getIsTouchDevice(): boolean;
    getScreenHeight(): number;
    getScreenWidth(): number;
    getUserAgent(): string;
    setBrowserLanguage(value: string): this;
    setDeviceOrientation(value: string): this;
    setIsMobile(value: boolean): this;
    setIsTouchDevice(value: boolean): this;
    setScreenHeight(value: number): this;
    setScreenWidth(value: number): this;
    setUserAgent(value: string): this;
}