import { UserDeviceInfoImpl } from "@memo28.monitoring/sdk-abstract";
export declare class UserDeviceInfo implements UserDeviceInfoImpl {
    browserLanguage?: string | undefined;
    isTouchDevice?: boolean | undefined;
    isMobile?: boolean;
    deviceOrientation?: string | undefined;
    userAgent?: string | undefined;
    screenWidth?: number | undefined;
    screenHeight?: number | undefined;
    constructor();
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
