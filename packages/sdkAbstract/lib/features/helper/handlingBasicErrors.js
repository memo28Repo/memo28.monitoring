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
    getDownLink() {
        return this.downLink;
    }
    setDownLink(value) {
        this.downLink = value;
        return this;
    }
    getRtt() {
        return this.rtt;
    }
    setRtt(value) {
        this.rtt = value;
        return this;
    }
    constructor(config) {
        super(config);
        this.expandTheInformation = {};
        this.message = '';
        this.stack = '';
        this.kind = 'stableTrigger';
        this.colno = 0;
        this.lineno = 0;
        this.type = '';
        this.downLink = '';
        this.rtt = '';
        this.saveData = false;
        this.effectiveType = '';
    }
    getExpandTheInformation() {
        return this.expandTheInformation;
    }
    setExpandTheInformation(value) {
        this.expandTheInformation = value;
        return this;
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
        return this.colno;
    }
    getLineno() {
        return this.lineno;
    }
    setColno(colno) {
        this.colno = colno;
        return this;
    }
    setLineno(lineno) {
        this.lineno = lineno;
        return this;
    }
    getEffectiveType() {
        return this.effectiveType;
    }
    getSaveData() {
        return this.saveData;
    }
    setEffectiveType(value) {
        this.effectiveType = value;
        return this;
    }
    setSaveData(value) {
        this.saveData = value;
        return this;
    }
}
exports.HandlingBasicErrors = HandlingBasicErrors;
