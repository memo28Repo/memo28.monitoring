import { PerformanceLongTaskTypes, PerformanceNavigation, PerformanceResource, PerformanceVisibilityState } from "@memo28.monitoring/sdk-abstract";
export type PerformanceUtilsTypes = {} & Performance['memory'] & PerformanceVisibilityState & PerformanceResource & PerformanceLongTaskTypes & PerformanceNavigation & PerformanceEntry;
export declare class PerformanceUtils {
    constructor();
    private getMemory;
    observer(callback?: (el: PerformanceUtilsTypes) => void): {
        disconnect: () => void;
    };
}
