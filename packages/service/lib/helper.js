"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAxiosError = void 0;
const axios_1 = require("axios");
function isAxiosError(error) {
    console.log(error, 'error');
    return error instanceof axios_1.AxiosError;
}
exports.isAxiosError = isAxiosError;
