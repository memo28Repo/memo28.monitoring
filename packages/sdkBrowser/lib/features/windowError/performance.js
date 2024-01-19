"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceUtils = void 0;
class PerformanceUtils {
    constructor() {
    }
    getMemory() {
        const memory = performance.memory;
        return {
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            totalJSHeapSize: memory.totalJSHeapSize,
            usedJSHeapSize: memory.usedJSHeapSize
        };
    }
    observer(callback) {
        const performanceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach(el => {
                callback === null || callback === void 0 ? void 0 : callback(Object.assign(Object.assign({}, JSON.parse(JSON.stringify(el))), this.getMemory()));
            });
        });
        performanceObserver.observe({
            entryTypes: [...PerformanceObserver.supportedEntryTypes]
        });
        return {
            disconnect: performanceObserver.disconnect
        };
    }
}
exports.PerformanceUtils = PerformanceUtils;
