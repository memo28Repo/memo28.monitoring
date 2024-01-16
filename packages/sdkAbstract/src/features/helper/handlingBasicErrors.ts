import {UserDeviceInfo} from "./userDeviceInfo";
import {
    ErrorMessageImpl,
    ErrorStackImpl,
    TriggerLevelImpl,
    TriggerLevelImplWithKindType,
    UserDeviceInfoImpl,
    TriggerLevelImplType,
    UserDiyContextImpl,
    expandTheInformationObjectType

} from "../../index";

/**
 *
 *
 * 建议处理基础错误时 必须继承该类
 *
 * @public
 *
 */
export class HandlingBasicErrors extends UserDeviceInfo implements ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, UserDiyContextImpl {


    expandTheInformation:expandTheInformationObjectType = {}
    message: string = '';
    stack: string = '';
    kind: TriggerLevelImplWithKindType = 'stableTrigger';
    colno: number = 0;
    lineno: number = 0;
    type: TriggerLevelImplType = '';


    getExpandTheInformation(): expandTheInformationObjectType {
        return this.expandTheInformation;
    }

    setExpandTheInformation(value: expandTheInformationObjectType): this {
        this.expandTheInformation = value
        return this;
    }


    getType(): TriggerLevelImplType {
        return this.type
    }

    setType(type: TriggerLevelImplType): this {
        this.type = type
        return this
    }

    getKind(): TriggerLevelImplWithKindType {
        return this.kind;
    }

    setKind(type: TriggerLevelImplWithKindType): this {
        this.kind = type;
        return this;
    }

    getStack(): string {
        return this.stack;
    }

    setStack(stack: string): this {
        this.stack = stack;
        return this;
    }

    getMessage(): string {
        return this.message;
    }

    setMessage(msg: string): this {
        this.message = msg;
        return this;
    }


    getColno(): number {
        return 0;
    }

    getLineno(): number {
        return 0;
    }

    setColno(colno: number): this {
        this.colno = colno
        return this;
    }

    setLineno(lineno: number): this {
        this.lineno = lineno
        return this;
    }
}
