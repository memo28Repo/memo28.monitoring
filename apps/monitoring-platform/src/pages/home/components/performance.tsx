import {FC} from "react";
import {errorLogDetails} from "@memo28.monitoring/service";
import {Descriptions} from "antd";
import dayjs from "dayjs";

const PerformanceCpm: FC<{ details: Partial<errorLogDetails> }> = ({
                                                                       details
                                                                   }) => {

    if (details.type !== 'performance') return <></>


    function getType() {
        if (details.entryType === 'resource') {
            return '资源'
        }
        if (details.entryType === 'paint') {
            return '绘制事件'
        }
        if (details.entryType === 'longtask') {
            return '长任务'
        }
        if (details.entryType === 'frame') {
            return '帧数'
        }
        if (details.entryType === 'visibility-state') {
            return '元素隐藏与展示'
        }

        return ''
    }


    return <>

        <Descriptions title={`性能监控-${getType()}`} layout={'vertical'} items={[
            {
                key: 0,
                label: 'name(name)',
                children: <>
                    {details.name || 'unknown'}
                </>
            },
            {
                key: -1,
                label: '持续时间(duration)',
                children: <>
                    {details.duration || 'unknown'}(ms)
                </>
            },
            {
                key: 1,
                label: '资源启动类型(initiatorType)',
                children: <>
                    {details.initiatorType || 'unknown'}
                </>
            },
            {
                key: 2,
                label: '传输类型(deliveryType)',
                children: <>
                    {details.deliveryType || 'unknown'}
                </>
            },
            {
                key: 3,
                label: '渲染堵塞状态(renderBlockingStatus)',
                children: <>
                    {details.renderBlockingStatus || 'unknown'}
                </>
            },
            {
                key: 4,
                label: 'worker启动时间(workerStart)',
                children: <>
                    {details.workerStart ? dayjs(details.workerStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 5,
                label: '重定向开始时间(redirectStart)',
                children: <>
                    {details.redirectStart ? dayjs(details.redirectStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 6,
                label: '重定向结束时间(redirectEnd)',
                children: <>
                    {details.redirectEnd ? dayjs(details.redirectEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 7,
                label: '抓取开始时间(fetchStart)',
                children: <>
                    {details.fetchStart ? dayjs(details.fetchStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 8,
                label: '域名查询开始时间(domainLookupStart)',
                children: <>
                    {details.domainLookupStart ? dayjs(details.domainLookupStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 9,
                label: '域名查询结束时间(domainLookupEnd)',
                children: <>
                    {details.domainLookupEnd ? dayjs(details.domainLookupEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 10,
                label: '连接开始时间(connectStart)',
                children: <>
                    {details.connectStart ? dayjs(details.connectStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 11,
                label: '安全连接开始时间(secureConnectionStart)',
                children: <>
                    {details.secureConnectionStart ? dayjs(details.secureConnectionStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 12,
                label: '连接结束时间(connectEnd)',
                children: <>
                    {details.connectEnd ? dayjs(details.connectEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 13,
                label: '请求开始时间(requestStart)',
                children: <>
                    {details.requestStart ? dayjs(details.requestStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 14,
                label: '响应开始时间(responseStart)',
                children: <>
                    {details.responseStart ? dayjs(details.responseStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 15,
                label: '响应结束时间(responseEnd)',
                children: <>
                    {details.responseEnd ? dayjs(details.responseEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 15,
                label: '第一个中间响应的开始时间(firstInterimResponseStart)',
                children: <>
                    {details.firstInterimResponseStart ? dayjs(details.firstInterimResponseStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 16,
                label: '传输的大小(transferSize)',
                children: <>
                    {details.transferSize ? details.transferSize : 'unknown'}
                </>
            },
            {
                key: 17,
                label: '编码体的大小(encodedBodySize)',
                children: <>
                    {details.encodedBodySize ? details.encodedBodySize : 'unknown'}
                </>
            },
            {
                key: 18,
                label: '解码体的大小(decodedBodySize)',
                children: <>
                    {details.decodedBodySize ? details.decodedBodySize : 'unknown'}
                </>
            },
            {
                key: 19,
                label: '响应状态码(responseStatus)',
                children: <>
                    {details.responseStatus ? details.responseStatus : 'unknown'}
                </>
            },
            {
                key: 20,
                label: '卸载事件的开始时间(unloadEventStart)',
                children: <>
                    {details.unloadEventStart ? dayjs(details.unloadEventStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 21,
                label: '卸载事件的结束时间(unloadEventEnd)',
                children: <>
                    {details.unloadEventEnd ? dayjs(details.unloadEventEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 22,
                label: 'DOM 可交互的时间(domInteractive)',
                children: <>
                    {details.domInteractive ? dayjs(details.domInteractive).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 22,
                label: 'DOMContentLoaded 事件开始时间(domContentLoadedEventStart)',
                children: <>
                    {details.domContentLoadedEventStart ? dayjs(details.domContentLoadedEventStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 23,
                label: 'DOMContentLoaded 事件结束时间(domContentLoadedEventEnd)',
                children: <>
                    {details.domContentLoadedEventEnd ? dayjs(details.domContentLoadedEventEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 24,
                label: 'DOM 完成的时间(domComplete)',
                children: <>
                    {details.domComplete ? dayjs(details.domComplete).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 25,
                label: '页面加载事件开始时间(loadEventStart)',
                children: <>
                    {details.loadEventStart ? dayjs(details.loadEventStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 26,
                label: '页面加载事件结束时间(loadEventStart)',
                children: <>
                    {details.loadEventEnd ? dayjs(details.loadEventEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 27,
                label: '页面加载事件结束时间(loadEventEnd)',
                children: <>
                    {details.loadEventEnd ? dayjs(details.loadEventEnd).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 28,
                label: '重定向次数(redirectCount)',
                children: <>
                    {details.redirectCount ? dayjs(details.redirectCount).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 29,
                label: '激活的开始时间(activationStart)',
                children: <>
                    {details.activationStart ? dayjs(details.activationStart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 30,
                label: '临界内容渲染重启时间(criticalCHRestart)',
                children: <>
                    {details.criticalCHRestart ? dayjs(details.criticalCHRestart).format("YYYY-MM-DD HH:mm:ss") : 'unknown'}
                </>
            },
            {
                key: 31,
                label: '堆内存大小的限制(jsHeapSizeLimit)',
                children: <>
                    {details.jsHeapSizeLimit ? details.jsHeapSizeLimit : 'unknown'}
                </>
            },
            {
                key: 32,
                label: '堆的总大小(totalJSHeapSize)',
                children: <>
                    {details.totalJSHeapSize ? details.totalJSHeapSize : 'unknown'}
                </>
            },
            {
                key: 33,
                label: '堆的已使用大小(usedJSHeapSize)',
                children: <>
                    {details.usedJSHeapSize ? details.usedJSHeapSize : 'unknown'}
                </>
            },
        ]}/>

    </>
}

export {PerformanceCpm}
