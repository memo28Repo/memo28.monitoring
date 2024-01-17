import { ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, TriggerLevelImplWithKindType, MonitoringConfigImpl } from '@memo28.monitoring/sdk-abstract';
import { UserDeviceInfo } from "../autoInfo/userDeviceInfo";
/**
 *
 * power
 *
 * 捕捉运行时错误： 这包括由无效的 JavaScript 语法、未定义的变量、类型错误等导致的错误。
 *
 * 跨域脚本错误（Cross-origin Script Errors）：
 * 如果在 <script> 标签中引入的脚本发生错误，并且该脚本位于不同的域，也会触发 window.onerror 事件。
 * 这通常会导致 "Script error." 的错误消息，
 * 因为浏览器出于安全原因不会提供详细的错误信息。
 *
 * <!-- 例子：跨域脚本错误 -->
 * <script src="https://example.com/external-script.js"></script>
 *
 *
 * @public
 *
 */
export declare class TrackingWindowError extends UserDeviceInfo implements ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl {
    private config?;
    message: string;
    stack: string;
    colno: number;
    lineno: number;
    kind: TriggerLevelImplWithKindType;
    constructor(config?: MonitoringConfigImpl | undefined);
    getKind(): TriggerLevelImplWithKindType;
    setKind(type: TriggerLevelImplWithKindType): this;
    getLineno(): number;
    setLineno(lineno: number): this;
    getColno(): number;
    setColno(colno: number): this;
    setStack(stack: string): this;
    getStack(): string;
    getMessage(): string;
    setMessage(msg: string): this;
}
