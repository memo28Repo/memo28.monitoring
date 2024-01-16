import {useParams} from "react-router-dom";
import {Typography, Divider, Form, Tag} from 'antd'
import {getErrorLog, errorLogDetails} from '@memo28.monitoring/service'
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
        <Divider orientation="left">错误信息</Divider>
        <div className={'text-red-700 font-bold mt-2'}>
            {details.message || 'no message'}
        </div>
        <Form.Item label={'错误时间'}>
            {dayjs(details.CreatedAt).format("YYYY-MM-DD HH:mm:ss")}
        </Form.Item>

        <Form.Item label={'报错堆栈'}>
            <SyntaxHighlighter language={'json'} style={docco} children={details.stack || ''}/>
        </Form.Item>

        <Form.Item label={'代码行列'}>
            {details.colno || 0}:{details.lineno || 0}
        </Form.Item>

        <Divider orientation="left">用户信息</Divider>
        <Form.Item label={'设备宽度'}>
            {details.screenWidth || 'unknown'}
        </Form.Item>
        <Form.Item label={'设备高度'}>
            {details.screenHeight || 'unknown'}
        </Form.Item>
        <Form.Item label={'设备方向'}>
            {details.deviceOrientation || 'unknown'}
        </Form.Item>
        <Form.Item label={'浏览器语言'}>
            {details.browserLanguage || 'unknown'}
        </Form.Item>
        <Form.Item label={'用户信息'}>
            {details.userAgent || 'unknown'}
        </Form.Item>
    </>
}

export default ErrorDetails
