import {useEffect, useState} from 'react'
import {getSettingsDetails} from '@memo28.monitoring/service'
import {updateSettingsDetails} from "@memo28.monitoring/service/src/api/settings.ts";


export function useSettingsForm() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [number, setNumber] = useState(10)

    const [expirationTime, setExpirationTime] = useState(0)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSettings()
    }, []);

    function getSettings() {
        setLoading(true)
        getSettingsDetails().then(res => {
            setNumber(res.data.number || 10)
            setExpirationTime(res.data.expirationTime || 0)
            setLoading(false)
        })
    }


    function getParams() {
        return {
            expirationTime,
            number
        }

    }

    function submit() {
        setLoading(true)
        updateSettingsDetails(getParams()).then(() => {
            getSettings()
        }).finally(() => {
            setLoading(false)
            setIsModalOpen(false)
        })
    }

    function reset() {
        getSettings()
    }

    return {
        number,
        setNumber,
        expirationTime,
        setExpirationTime,
        getParams,
        loading,
        setLoading,
        reset,
        submit,
        isModalOpen,
        setIsModalOpen
    }
}
