import {FC} from 'react'
import type {errorLogDetails} from "@memo28.monitoring/service";
import {Descriptions} from "antd";
import dayjs from "dayjs";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Errors: FC<{ details: Partial<errorLogDetails> }> = ({details}) => {

    if (details.type === 'performance') {
        return <></>
    }


    return <>
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

    </>

}


export {Errors}
