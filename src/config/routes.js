//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//admin pages
import AdminHome from "../pages/admin";
import AdminSignIn from "../pages/admin/SignIn";
import AdminUsers from "../pages/admin/Users"
import AdminMenuWeb from '../pages/admin/MenuWeb';

//pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Pages from '../pages/Courses';

//Others
import Error404 from "../pages/Error404";
import Courses from "../pages/Courses";

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                path: "/admin/menu",
                component: AdminMenuWeb,
                exact: true
            },
            {
                component: Error404
            }
        ]       
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/home",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/Courses",
                component: Courses,
                exact: true
            },
            {
                component: Home
            }
        ]
    }
]

export default routes;