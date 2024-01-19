import {useParams} from "react-router-dom";
import {Typography, Tag} from 'antd'
import {getErrorLog} from '@memo28.monitoring/service'
import type {errorLogDetails} from '@memo28.monitoring/service'
import {useEffect, useState} from "react";
import {getErrorLogIcon} from "~/features/errorLog/icons.ts";
import {Errors} from "~/pages/home/components/error.tsx";
import {Users} from "~/pages/home/components/user.tsx";
import {Network} from "~/pages/home/components/network.tsx";
import {PerformanceCpm} from "~/pages/home/components/performance.tsx";

const ErrorDetails = () => {
    const params = useParams<{ id: string }>();

    const [details, setDetails] = useState<Partial<errorLogDetails>>({})

    useEffect(() => {
        if (params.id) {
            (async () => {
                const result = await getErrorLog(params.id as string)
                setDetails(result.data || {})
            })()
        }
    }, []);

    return <>
        <div className={'text-3xl flex items-center'}>
            <Typography.Title>
                {details.type || 'unknown'}
            </Typography.Title>
            <Tag className="ml-4" color="#2db7f5">{details.kind}</Tag>
            <img className="h-5 w-5 flex mr-2" src={getErrorLogIcon(details.type || '')} alt=""/>
        </div>

        <PerformanceCpm details={details}/>

        <Errors details={details}/>

        <Users details={details}/>

        <Network details={details}/>
    </>
}

export default ErrorDetails
