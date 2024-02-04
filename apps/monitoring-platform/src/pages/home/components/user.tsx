import {FC} from 'react'
import type {errorLogDetails} from "@memo28.monitoring/service";
import {Descriptions} from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/esm/styles/hljs";


// @ts-ignore
import {SNI} from '@memo28/utils'

const Users: FC<{ details: Partial<errorLogDetails> }> = ({details}) => {


    return <>
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
                    {
                        SNI("uniApp", details.env) ?
                            <SyntaxHighlighter showLineNumbers showInlineLineNumbers language={'json'} style={docco}
                                               children={JSON.stringify(JSON.parse(details.userAgent || "{}",), null, 2) || 'unknown'}/>
                            :
                            details.userAgent || 'unknown'
                    }
                </>
            },
        ]}/>

    </>

}

export {Users}
