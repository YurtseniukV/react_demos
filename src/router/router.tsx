import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import CarsPage from "../pages/CarsPage";
import ErrorComponent from "../components/error/ErrorComponent";

export const routerConfig=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorComponent/>,
        children:[
            {index:true, element:<LoginPage/>},
            {path:'cars',element:<CarsPage/>}
        ]
    }
])