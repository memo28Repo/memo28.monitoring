/**
 *
 * 获取堆栈信息
 *
 * @public
 *
 */
export declare abstract class ErrorStackImpl {
    abstract stack: string;
    abstract lineno: number;
    abstract getLineno(): number;
    abstract setLineno(lineno: number): this;
    abstract colno: number;
    abstract getColno(): number;
    abstract setColno(colno: number): this;
    abstract setStack(stack: string): this;
    abstract getStack(): string;
}
