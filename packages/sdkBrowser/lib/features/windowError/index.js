"use strict";
/*
 * @Author: @memo28.repo
 * @Date: 2024-01-08 23:35:01
 * @LastEditTime: 2024-01-08 23:35:02
 * @Description:
 * @FilePath: /memo28.monitoring/packages/sdkBrowser/src/features/windowError/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingWindowError = void 0;
class TrackingWindowError {
    constructor() {
        window.addEventListener('error', (event) => {
            console.log('event', event);
        });
    }
}
exports.TrackingWindowError = TrackingWindowError;
