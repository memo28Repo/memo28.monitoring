export type expandTheInformationObjectType = {
    [key: string]: string | number;
};
export declare abstract class UserDiyContextImpl {
    /**
     *
     *
     * 扩展信息
     *
     * @public
     */
    abstract expandTheInformation: expandTheInformationObjectType;
    abstract getExpandTheInformation(): expandTheInformationObjectType;
    abstract setExpandTheInformation(value: expandTheInformationObjectType): this;
}
