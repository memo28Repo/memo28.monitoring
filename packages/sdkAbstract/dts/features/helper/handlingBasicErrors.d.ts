import { UserDeviceInfo } from "./userDeviceInfo";
import { ErrorMessageImpl, ErrorStackImpl, TriggerLevelImpl, TriggerLevelImplWithKindType, UserDeviceInfoImpl, TriggerLevelImplType, UserDiyContextImpl, expandTheInformationObjectType } from "../../index";
/**
 *
 *
 * 建议处理基础错误时 必须继承该类
 *
 * @public
 *
 */
export declare class HandlingBasicErrors extends UserDeviceInfo implements ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, UserDiyContextImpl {
    expandTheInformation: expandTheInformationObjectType;
    message: string;
    stack: string;
    kind: TriggerLevelImplWithKindType;
    colno: number;
    lineno: number;
    type: TriggerLevelImplType;
    getExpandTheInformation(): expandTheInformationObjectType;
    setExpandTheInformation(value: expandTheInformationObjectType): this;
    getType(): TriggerLevelImplType;
    setType(type: TriggerLevelImplType): this;
    getKind(): TriggerLevelImplWithKindType;
    setKind(type: TriggerLevelImplWithKindType): this;
    getStack(): string;
    setStack(stack: string): this;
    getMessage(): string;
    setMessage(msg: string): this;
    getColno(): number;
    getLineno(): number;
    setColno(colno: number): this;
    setLineno(lineno: number): this;
}
