import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '~/pages/home/index.tsx'
import ErrorList from '~/pages/home/errorList.tsx'
import ErrorDetails from '~/pages/home/errorDetails.tsx'
import Settings from "~/pages/settings";


export const routerPathMap = {
    'home': {
        home: '/',
        errorList: '/errorList',
        errorDetails: '/errorDetails'
    },
    'settings': {
        index: '/settings'
    }
}

export const router = createBrowserRouter([
    {
        path: routerPathMap.home.home,
        element: <Home />,
        children: [
            {
                path: routerPathMap.home.errorList,
                element: <ErrorList/>,
            },
            {
                path: `${routerPathMap.home.errorDetails}/:id`,
                element: <ErrorDetails/>
            },
            {
                path: routerPathMap.settings.index,
                element: <Settings></Settings>

            }
        ]
    },

])


