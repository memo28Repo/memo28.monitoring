"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const service_1 = require("@memo28/service");
exports.http = new service_1.ServiceUtils().modules({
    interceptorModule: [service_1.MultiVersionSwitching, service_1.RetData]
}).initializeConfiguration({
    // @ts-ignore
    baseURL: "http://localhost:8089/api/version",
    versionPlaceholder: "version",
    version: "v1",
}).instantiation().getAxios();
