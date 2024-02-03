import {useState} from "react";
import {getErrorLogList} from "@memo28.monitoring/service";
import type {errorLogDetails} from "@memo28.monitoring/service";

export function useErrorLogList() {

    const [detailsList, setDetailsList] = useState<errorLogDetails[]>([])

    const [listTotal, setListTotal] = useState(0)

    const [pageSize] = useState(10)

    const [pageNum, setPageNum] = useState(1)

    const [loading, setLoading] = useState(false)

    const [type, setType] = useState(undefined)

    const [userId, setUserId] = useState('')


    function refPage(pageNum: number) {
        setLoading(true)
        getErrorLogList({
            pageNo: pageNum,
            pageSize: pageSize,
            types: type,
            userId
        }).then(res => {
            setListTotal(res.data.total || 0)
            setDetailsList(res.data.list || [])
        }).finally(() => {
            setLoading(false)
        })
    }


    function resetSearchHandler() {

    }


    return {
        pageSize,
        refPage,
        setPageNum,
        pageNum,
        listTotal,
        detailsList,
        setLoading,
        loading,
        setType,
        type,
        userId,
        setUserId,
        resetSearchHandler
    }
}
