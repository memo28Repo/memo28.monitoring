import {FC} from 'react'
import type {errorLogDetails} from "@memo28.monitoring/service";
import {Descriptions} from "antd";

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
                    {details.userAgent || 'unknown'}
                </>
            },
        ]}/>

    </>

}

export {Users}
