export type UserDeviceInfoImplEnv = "uniApp" | "browser" | ''
/**
 * 表示用户信息和设备信息的抽象类。
 */
export abstract class UserDeviceInfoImpl {

    abstract env: UserDeviceInfoImplEnv

    abstract getEnv(): UserDeviceInfoImplEnv

    abstract setEnv(env: UserDeviceInfoImplEnv):this

    abstract createTime: string

    abstract getCreateTime(): string

    abstract setCreateTime(time: string): this


    /** 用户代理字符串，表示浏览器和操作系统信息。
     * @public
     */
    abstract userAgent?: string;

    abstract getUserAgent(): string;

    abstract setUserAgent(value: string): this;

    /** 用户屏幕的宽度。
     * @public
     */
    abstract screenWidth?: number;

    abstract getScreenWidth(): number;

    abstract setScreenWidth(value: number): this;

    /** 用户屏幕的高度。
     * @public
     */
    abstract screenHeight?: number;

    abstract getScreenHeight(): number;

    abstract setScreenHeight(value: number): this;

    /** 用户的浏览器语言偏好。
     * @public
     */
    abstract browserLanguage?: string;

    abstract getBrowserLanguage(): string;

    abstract setBrowserLanguage(value: string): this;

    /** 指示用户是否使用移动设备。
     * @public
     */
    abstract isMobile?: boolean;

    abstract getIsMobile(): boolean;

    abstract setIsMobile(value: boolean): this;

    /** 设备的方向。
     * @public
     */
    abstract deviceOrientation?: string;

    abstract getDeviceOrientation(): string;

    abstract setDeviceOrientation(value: string): this;

    /** 指示设备是否支持触摸。
     * @public
     */
    abstract isTouchDevice?: boolean;

    abstract getIsTouchDevice(): boolean;

    abstract setIsTouchDevice(value: boolean): this;
}
