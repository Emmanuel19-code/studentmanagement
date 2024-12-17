import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AdminDashboard from "./screen/AdminDashboard";
import StudentDashboard from "./screen/StudentDashboard";
const router = createBrowserRouter([
 {
    path:'/admin',
    element:<Layout/>,
    children:[
        {
            path:'dashboard',
            element:<AdminDashboard/>
        }
    ]
 },
 {
    path:'/student',
    element:<Layout/>,
    children:[
        {
            path:'dashboard',
            element:<StudentDashboard/>
        }
    ]
 }
])

export default router