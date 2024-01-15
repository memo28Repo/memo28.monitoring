/*
 * @Author: @memo28.repo
 * @Date: 2024-01-10 23:07:57
 * @LastEditTime: 2024-01-10 23:16:08
 * @Description:
 * @FilePath: /baseReact/src/App.tsx
 */
import {getErrorLogList, errorLogDetails} from '@memo28.monitoring/service'
import {useEffect, useState} from "react";
import ErrorLogList from "~/components/errorLog/list.tsx";

function App() {

    const [detailsList,setDetailsList] = useState<errorLogDetails[]>([])


    useEffect(() => {
        getErrorLogList({
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            setDetailsList(res.data)
        })
    }, []);

    return (
        <>
            <ErrorLogList list={detailsList}/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    )
}

export default App
