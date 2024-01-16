import React, {useEffect, useState} from 'react';
import {List, Spin} from 'antd';
import {getErrorLogIcon} from "~/features/errorLog/icons.ts";
import {useNavigate} from "react-router-dom";
import {routerPathMap} from "~/router";
import {useErrorLogList} from "~/pages/hooks/useErrorLog.ts";

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
                                }} href="javascript:;">{item.type || 'unknown'}</a>}
                                description={item.message || 'no message'}
                            />

                        </List.Item>
                    )}
                />
            </Spin>

        </>
    );
};

export default ErrorList;
