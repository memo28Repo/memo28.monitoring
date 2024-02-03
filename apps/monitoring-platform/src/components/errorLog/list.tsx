import {FC} from 'react'
import {errorLogDetails} from '@memo28.monitoring/service'


export interface errorLogListProps {
    list: errorLogDetails[]
}


const ErrorLogList: FC<errorLogListProps> = ({list}) => {
    return (
        <>
            {list.map((item, index) => {
                return <div key={index}>
                    浏览器语言:  {item.browserLanguage || '-'}
                    信息:  {item.message || '-'}
                </div>
            })}
        </>
    )
}

export default ErrorLogList
