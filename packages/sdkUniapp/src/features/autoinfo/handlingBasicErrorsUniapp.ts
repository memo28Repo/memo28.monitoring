import {UserDeviceInfoUniApp} from "./userDeviceInfo";
import {
    ErrorMessageImpl,
    ErrorStackImpl,
    TriggerLevelImpl,
    TriggerLevelImplWithKindType,
    UserDeviceInfoImpl,
    TriggerLevelImplType,
    UserDiyContextImpl,
    expandTheInformationObjectType,
    NetworkContextImpl,
    MonitoringConfigImpl
} from "@memo28.monitoring/sdk-abstract";

/**
 *
 *
 * 建议处理基础错误时 必须继承该类
 *
 * @public
 *
 */
export class HandlingBasicErrorsUniApp extends UserDeviceInfoUniApp implements ErrorMessageImpl, ErrorStackImpl, UserDeviceInfoImpl, TriggerLevelImpl, UserDiyContextImpl, NetworkContextImpl {



    expandTheInformation: expandTheInformationObjectType = {}
    message: string = '';
    stack: string = '';
    kind: TriggerLevelImplWithKindType = 'stableTrigger';
    colno: number = 0;
    lineno: number = 0;
    userId: string = ''
    type: TriggerLevelImplType = '';


    downLink = 0
    rtt = 0
    saveData = false
    effectiveType = ''

    getUserId(): string {
        return this.userId;
    }

    setUserId(userId: string): this {
        this.userId = userId
        return this;
    }

    getDownLink(): number {
        return this.downLink || 0;
    }

    setDownLink(value: number): this {
        this.downLink = value
        return this;
    }

    getRtt(): number {
        return this.rtt || 0;
    }

    setRtt(value: number): this {
        this.rtt = value
        return this;
    }

    constructor(config?: MonitoringConfigImpl) {
        super(config);
    }


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
        return this.colno;
    }

    getLineno(): number {
        return this.lineno;
    }

    setColno(colno: number): this {
        this.colno = colno
        return this;
    }

    setLineno(lineno: number): this {
        this.lineno = lineno
        return this;
    }

    getEffectiveType(): string {
        return this.effectiveType;
    }

    getSaveData(): boolean {
        return this.saveData;
    }

    setEffectiveType(value: string): this {
        this.effectiveType = value
        return this;
    }

    setSaveData(value: boolean): this {
        this.saveData = value
        return this;
    }
}
