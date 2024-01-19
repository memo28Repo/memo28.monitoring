"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNetWork = exports.Network = void 0;
class Network {
    constructor() {
        this.downLink = 0;
        this.rtt = 0;
        this.saveData = false;
        this.effectiveType = '';
        const connection = navigator.connection;
        this.setRtt(connection.rtt);
        this.setDownLink(connection.downlink);
        this.setSaveData(connection.saveData || false);
        this.setEffectiveType(connection.effectiveType);
    }
    getDownLink() {
        return this.downLink || 0;
    }
    setDownLink(value) {
        this.downLink = value;
        return this;
    }
    getRtt() {
        return this.rtt || 0;
    }
    setRtt(value) {
        this.rtt = value;
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
exports.Network = Network;
class AutoNetWork {
    constructor(target, network) {
        target.setDownLink(network.getDownLink());
        target.setRtt(network.getRtt());
        target.setSaveData(network.getSaveData());
        target.setEffectiveType(network.getEffectiveType());
    }
}
exports.AutoNetWork = AutoNetWork;
