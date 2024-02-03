import {http, Response} from '../http'

export interface logSettings {
    number: number
    expirationTime: number
}


export function getSettingsDetails() {
    return http<Response<logSettings>>({
        url: '/logSettings/getSettings'
    })
}


export function updateSettingsDetails(data: logSettings) {
    return http<Response<logSettings>>({
        url: '/logSettings/updateSettings',
        method: "post",
        data
    })
}
