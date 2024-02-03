import React, {useEffect, useState} from 'react';
import {List, Spin, Select, Input, Form, Button} from 'antd';
import {getErrorLogIcon} from "~/features/errorLog/icons.ts";
import {useNavigate} from "react-router-dom";
import {routerPathMap} from "~/router";
import {useErrorLogList} from "~/pages/home/hooks/useErrorLog.ts";
import {errorLogDetails} from "@memo28.monitoring/service";

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';


const ErrorList: React.FC = () => {
    const [position] = useState<PaginationPosition>('bottom');
    const [align] = useState<PaginationAlign>('start');
    const navigate = useNavigate();


    const errorLogList = useErrorLogList();


    useEffect(() => {
        document.title = '错误列表'
    }, []);
    useEffect(() => {
        errorLogList.refPage(errorLogList.pageNum)
    }, [errorLogList.pageNum, errorLogList.type, errorLogList.userId]);


    function getType(item: errorLogDetails) {
        return item.type || 'unknown'
    }

    function getMessage(item: errorLogDetails) {
        if (item.type === 'performance') return item.entryType
        return item.message || 'no message'
    }

    function getSelectList() {
        return [
            {
                value: 'window.error',
                label: 'error'
            },
            {
                value: 'unhandledrejection',
                label: 'Promise.reject'
            },
            {
                value: 'user-defined',
                label: '用户自定义'
            },
            {
                value: 'cross domain',
                label: '跨域监控'
            },
            {
                value: 'abnormal request',
                label: '异常请求监控'
            },
            {
                value: 'performance',
                label: '性能监控'
            },

        ]

    }

    return (
        <>
            <Form layout='inline' className='mb-6'>
                <Form.Item label={"错误类型"}>
                    <Select
                        style={{
                            width: 200
                        }}
                        placeholder="选择错误类型"
                        value={errorLogList.type}
                        options={getSelectList()}
                        onChange={(value) => {
                            errorLogList.setType(value)
                        }}
                    />
                </Form.Item>
                <Form.Item label={"UserId"}>
                    <Input
                        style={{
                            width: 200
                        }}
                        placeholder="根据用户Id进行筛选"
                        value={errorLogList.userId}
                        onChange={(value) => {
                            errorLogList.setUserId(value.target.value || '')
                        }}
                    />
                </Form.Item>

                <Button onClick={() => {
                    errorLogList.setType(undefined)
                    errorLogList.setUserId("")
                    errorLogList.setPageNum(1)
                }}>重置</Button>
            </Form>


            <Spin spinning={errorLogList.loading}>
                <List
                    pagination={{
                        position, align, total: errorLogList.listTotal, onChange(page, _) {
                            errorLogList.setPageNum(page)
                        },
                        pageSize: errorLogList.pageSize,
                        current: errorLogList.pageNum
                    }}
                    dataSource={errorLogList.detailsList}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={<img className='object-cover h-12 w-12' src={getErrorLogIcon(item.type)}/>}
                                title={<a onClick={() => {
                                    navigate(`${routerPathMap.home.errorDetails}/${item.ID}`, {
                                        state: {
                                            a: 1
                                        }
                                    })
                                }} href="javascript:;">{getType(item)}</a>}
                                description={getMessage(item)}
                            />

                        </List.Item>
                    )}
                />
            </Spin>

        </>
    );
};

export default ErrorList;
