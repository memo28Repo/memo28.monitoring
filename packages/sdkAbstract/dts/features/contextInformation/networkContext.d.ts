export declare abstract class NetworkContextImpl {
    /**
     * 表示设备的下行带宽，以 Mbit/s 为单位
     *
     * @public
     */
    abstract downLink: number;
    abstract getDownLink(): number;
    abstract setDownLink(value: number): this;
    /**
     *
     * 表示设备与服务器之间的往返时延，以毫秒为单位。
     * @public
     */
    abstract rtt: number;
    abstract getRtt(): number;
    abstract setRtt(value: number): this;
    /**
     *
     * 表示用户代理是否启用了数据节省模式
     *
     * @public
     */
    abstract saveData: boolean;
    abstract getSaveData(): boolean;
    abstract setSaveData(value: boolean): this;
    /**
     *
     * 表示网络的有效类型，可能是 "slow-2g"、"2g"、"3g"、"4g" 或 "5g"。
     *
     * @public
     */
    abstract effectiveType: string;
    abstract getEffectiveType(): string;
    abstract setEffectiveType(value: string): this;
}
