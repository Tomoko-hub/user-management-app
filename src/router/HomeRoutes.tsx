import Home from "../components/pages/Home"
import { Page404 } from "../components/pages/Page404"
import Setting from "../components/pages/Setting"
import UserManagement from "../components/pages/UserManagement"

export const homeRoutes =[
    {
        path: '/',
        expect: true,
        children: <Home />
    },
    {
        path: '/user_management',
        expect: false,
        children: <UserManagement />
    },
    {
        path: '/user_setting',
        expect: false,
        children: <Setting />
    },
    {
        path: '*',
        expect: false,
        children: <Page404 />
    },
]