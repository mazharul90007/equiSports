import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Error from "../Pages/Error";
import Equipments from "../Pages/Equipments";
import Details from "../Pages/Details";
import AddEquipments from "../Pages/AddEquipments";
import PrivateRoute from "./PrivateRoute";
import MyEquipments from "../Pages/MyEquipments";
import MyEquipmentDetails from "../Pages/MyEquipmentDetails";
import UpdateMyEquipment from "../Pages/UpdateMyEquipment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('https://equi-sports-server-five.vercel.app/products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/equipments',
                element: <Equipments></Equipments>,
                loader: ()=> fetch('https://equi-sports-server-five.vercel.app/products')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`https://equi-sports-server-five.vercel.app/products/${params.id}`)
            },
            {
                path: '/addEquipments',
                element: <PrivateRoute><AddEquipments></AddEquipments></PrivateRoute>
            },
            {
                path: '/myEquipments',
                element: <PrivateRoute><MyEquipments></MyEquipments></PrivateRoute>,
                // loader: ()=> fetch(`https://equi-sports-server-five.vercel.app/equipments`)
            },
            {
                path: '/myEquipmentDetails/:id',
                element: <PrivateRoute><MyEquipmentDetails></MyEquipmentDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://equi-sports-server-five.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/myEquipmentUpdate/:id',
                element: <PrivateRoute><UpdateMyEquipment></UpdateMyEquipment></PrivateRoute>,
                loader: ({params})=> fetch(`https://equi-sports-server-five.vercel.app/equipments/${params.id}`)
            }
        ]
    },
]);

export default router;