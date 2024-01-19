import React, {useEffect, useState} from 'react';
import {List, Spin} from 'antd';
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
        errorLogList.refPage(errorLogList.pageNum)
    }, [errorLogList.pageNum]);


    function getType(item: errorLogDetails) {
        return item.type || 'unknown'
    }

    function getMessage(item: errorLogDetails) {
        if (item.type === 'performance') return item.entryType
        return item.message || 'no message'
    }

    return (
        <>
            <Spin spinning={errorLogList.loading}>
                <List
                    pagination={{
                        position, align, total: errorLogList.listTotal, onChange(page, _) {
                            errorLogList.setPageNum(page)
                        },
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
