import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
// @ts-ignore
import {StringDerived,NumberDerived} from '@memo28/utils'
import {router} from '~/router'

StringDerived()
NumberDerived()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
