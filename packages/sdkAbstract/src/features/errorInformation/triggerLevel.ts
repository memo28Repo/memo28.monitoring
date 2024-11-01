/**
 *
 * 错误触发级别
 *
 * 稳定触发 不稳定触发
 *
 * @public
 *
 */

export type TriggerLevelImplWithKindType = 'stableTrigger' | 'unstableTrigger'

export type TriggerLevelImplType =
    'window.error'
    | 'unhandledrejection'
    | 'user-defined'
    | 'cross domain'
    | 'abnormal request'
    | 'performance'
    // =============== uniApp ============
    | 'uniApp.onError'
    | 'uniApp.network'
    | ''

export abstract class TriggerLevelImpl {

    abstract kind: TriggerLevelImplWithKindType

    abstract type: TriggerLevelImplType

    abstract getType(): TriggerLevelImplType

    abstract setType(type: TriggerLevelImplType): this

    abstract getKind(): TriggerLevelImplWithKindType

    abstract setKind(type: TriggerLevelImplWithKindType): this

}
