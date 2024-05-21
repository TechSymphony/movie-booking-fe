import { RouteObject, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Landing from '../pages/Client/Landing'

const clientRoute: RouteObject = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Landing />,
        },
    ],
}

const adminRoute: RouteObject = {
    path: '/admin',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <div>Admin</div>,
        },
    ],
}

const AllRoute = createBrowserRouter([clientRoute, adminRoute])

export default AllRoute
