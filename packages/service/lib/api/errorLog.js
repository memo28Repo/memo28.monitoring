"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorLogList = exports.deleteErrorLog = exports.getErrorLog = exports.createErrorLog = void 0;
const http_1 = require("../http");
function createErrorLog(errorLogRequest) {
    return (0, http_1.http)({
        // @ts-ignore
        method: 'POST',
        url: "/monitoringErrors/createErrorLog",
        data: errorLogRequest,
        pocketValue: {
            data: 0
        }
    });
}
exports.createErrorLog = createErrorLog;
function getErrorLog(id) {
    return (0, http_1.http)({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLog",
        params: {
            id
        },
        pocketValue: {
            data: {}
        }
    });
}
exports.getErrorLog = getErrorLog;
function deleteErrorLog(id) {
    return (0, http_1.http)({
        // @ts-ignore
        method: 'DELETE',
        url: "/monitoringErrors/deleteErrorLog",
        data: {
            id
        },
    });
}
exports.deleteErrorLog = deleteErrorLog;
function getErrorLogList(params) {
    return (0, http_1.http)({
        // @ts-ignore
        url: "/monitoringErrors/getErrorLogList",
        params: Object.assign({}, params),
        pocketValue: {
            data: {
                list: [],
                total: 0
            }
        }
    });
}
exports.getErrorLogList = getErrorLogList;
