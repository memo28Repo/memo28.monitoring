import {useParams} from "react-router-dom";
import {Typography, Divider, Form, Tag, Descriptions} from 'antd'
import {getErrorLog} from '@memo28.monitoring/service'
import type {errorLogDetails} from '@memo28.monitoring/service'
import {useEffect, useState} from "react";
import {getErrorLogIcon} from "~/features/errorLog/icons.ts";
import dayjs from 'dayjs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

        <Descriptions title={'错误信息'} layout={'vertical'} items={[
            {
                key: 1,
                label: '错误信息',
                children: <>
                    {details.message || 'no message'}
                </>
            },
            {
                key: 2,
                label: '错误时间',
                children: <>
                    {dayjs(details.CreatedAt).format("YYYY-MM-DD HH:mm:ss")}
                </>
            },
            {
                key: 3,
                label: '代码行列',
                children: <>
                    {details.colno || 0}:{details.lineno || 0}
                </>
            },
            {
                key: 4,
                label: '报错堆栈',
                children: <>
                    <SyntaxHighlighter language={'json'} style={docco} children={details.stack || ''}/>
                </>
            }
        ]}/>

        <Descriptions title={'用户信息'} layout="vertical" items={[
            {
                key: 1,
                label: '设备宽度',
                children: <>
                    {details.screenWidth || 'unknown'}
                </>
            },
            {
                key: 2,
                label: '设备高度',
                children: <>
                    {details.screenHeight || 'unknown'}
                </>
            },
            {
                key: 3,
                label: '设备方向',
                children: <>
                    {details.deviceOrientation || 'unknown'}
                </>
            },
            {
                key: 4,
                label: '浏览器语言',
                children: <>
                    {details.browserLanguage || 'unknown'}
                </>
            },
            {
                key: 5,
                label: '用户信息',
                children: <>
                    {details.userAgent || 'unknown'}
                </>
            },
        ]}/>

        <Descriptions title={'网络信息'} layout="vertical" items={[
            {
                key: 1,
                label: '下行带宽(downLink)',
                children: <>
                    {details.downLink || 'unknown'}(Mbit/s)
                </>
            },
            {
                key: 2,
                label: '往返时延(rtt) - 表示设备与服务器之间的往返时延，以毫秒为单位',
                children: <>
                    {details.rtt || 'unknown'}(ms)
                </>
            },
            {
                key: 3,
                label: '数据节省模式(saveData) - 表示用户代理是否启用了数据节省模式，以毫秒为单位',
                children: <>
                    {details.saveData || 'unknown'}(ms)
                </>
            },
            {
                key: 4,
                label: '网络类型(effectiveType) - 表示用户代理是否启用了数据节省模式，以毫秒为单位',
                children: <>
                    {details.effectiveType || 'unknown'}(ms)
                </>
            }
        ]}/>
    </>
}

export default ErrorDetails
