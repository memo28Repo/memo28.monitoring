import {
    PerformanceLongTaskTypes,
    PerformanceNavigation,
    PerformanceResource,
    PerformanceVisibilityState
} from "@memo28.monitoring/sdk-abstract";

export type PerformanceUtilsTypes =
    {}
    & Performance['memory']
    & PerformanceVisibilityState
    & PerformanceResource
    & PerformanceLongTaskTypes
    & PerformanceNavigation
    & PerformanceEntry

export class PerformanceUtils {
    constructor() {

    }

    private getMemory(): Performance['memory'] {
        const memory = performance.memory;
        return {
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            totalJSHeapSize: memory.totalJSHeapSize,
            usedJSHeapSize: memory.usedJSHeapSize

        }
    }

    observer(callback?: (el: PerformanceUtilsTypes) => void) {
        const performanceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach(el => {
                callback?.({
                    ...JSON.parse(JSON.stringify(el)),
                    ...this.getMemory()
                })
            })
        })

        performanceObserver.observe({
            entryTypes: [...PerformanceObserver.supportedEntryTypes]
        })


        return {
            disconnect: performanceObserver.disconnect
        }
    }
}
