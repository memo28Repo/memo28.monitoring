"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlingBasicErrors = void 0;
const userDeviceInfo_1 = require("./userDeviceInfo");
/**
 *
 *
 * 建议处理基础错误时 必须继承该类
 *
 * @public
 *
 */
class HandlingBasicErrors extends userDeviceInfo_1.UserDeviceInfo {
    constructor() {
        super(...arguments);
        this.message = '';
        this.stack = '';
        this.kind = 'stableTrigger';
        this.colno = 0;
        this.lineno = 0;
        this.type = '';
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
        return this;
    }
    getKind() {
        return this.kind;
    }
    setKind(type) {
        this.kind = type;
        return this;
    }
    getStack() {
        return this.stack;
    }
    setStack(stack) {
        this.stack = stack;
        return this;
    }
    getMessage() {
        return this.message;
    }
    setMessage(msg) {
        this.message = msg;
        return this;
    }
    getColno() {
        return 0;
    }
    getLineno() {
        return 0;
    }
    setColno(colno) {
        this.colno = colno;
        return this;
    }
    setLineno(lineno) {
        this.lineno = lineno;
        return this;
    }
}
exports.HandlingBasicErrors = HandlingBasicErrors;
