/**
 *
 * 错误触发级别
 *
 * 稳定触发 不稳定触发
 *
 * @public
 *
 */
export type TriggerLevelImplWithKindType = 'stableTrigger' | 'unstableTrigger';
export type TriggerLevelImplType = 'window.error' | 'unhandledrejection' | 'user-defined' | '';
export declare abstract class TriggerLevelImpl {
    abstract kind: TriggerLevelImplWithKindType;
    abstract type: TriggerLevelImplType;
    abstract getType(): TriggerLevelImplType;
    abstract setType(type: TriggerLevelImplType): this;
    abstract getKind(): TriggerLevelImplWithKindType;
    abstract setKind(type: TriggerLevelImplWithKindType): this;
}
