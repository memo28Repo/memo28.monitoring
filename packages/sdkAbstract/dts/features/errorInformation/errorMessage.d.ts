/**
 *
 * 错误消息的类
 *
 * @public
 */
export declare abstract class ErrorMessageImpl {
    abstract message: string;
    abstract getMessage(): string;
    abstract setMessage(msg: string): this;
}
