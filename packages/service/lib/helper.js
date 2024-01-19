"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAxiosError = void 0;
function isAxiosError(error) {
    return (error === null || error === void 0 ? void 0 : error.code) === 'ERR_NETWORK';
}
exports.isAxiosError = isAxiosError;
