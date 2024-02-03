export type expandTheInformationObjectType = {
    [key: string]: string | number
}

export abstract class UserDiyContextImpl {
    /**
     *
     *
     * 扩展信息 自定义字段
     *
     * @public
     */
    abstract expandTheInformation: expandTheInformationObjectType

    abstract getExpandTheInformation(): expandTheInformationObjectType

    abstract setExpandTheInformation(value: expandTheInformationObjectType): this


    /**
     *
     * 用户id 后续可根据用户 id 区分错误
     *
     * @public
     */
    abstract userId: string

    abstract getUserId(): string

    abstract setUserId(userId: string): this

}
