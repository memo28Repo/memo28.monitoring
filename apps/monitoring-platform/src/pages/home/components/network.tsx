import {FC} from "react";
import type {errorLogDetails} from "@memo28.monitoring/service";
import {Descriptions} from "antd";

const Network: FC<{ details: Partial<errorLogDetails> }> = ({details}) => {

    return <>

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

export {Network}
