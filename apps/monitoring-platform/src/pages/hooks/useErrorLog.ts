import {useState} from "react";
import {getErrorLogList} from "@memo28.monitoring/service";
import type {errorLogDetails} from "@memo28.monitoring/service";

export function useErrorLogList() {

    const [detailsList, setDetailsList] = useState<errorLogDetails[]>([])

    const [listTotal, setListTotal] = useState(0)

    const [pageSize] = useState(10)

    const [pageNum, setPageNum] = useState(1)

    const [loading, setLoading] = useState(false)


    function refPage(pageNum: number) {
        setLoading(true)
        getErrorLogList({
            pageNo: pageNum,
            pageSize: pageSize
        }).then(res => {
            setListTotal(res.data.total || 0)
            setDetailsList(res.data.list || [])
        }).finally(() => {
            setLoading(false)
        })

    }


    return {refPage, setPageNum, pageNum, listTotal, detailsList, setLoading, loading}
}
