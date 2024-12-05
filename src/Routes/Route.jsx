import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Error from "../Pages/Error";
import Equipments from "../Pages/Equipments";
import Details from "../Pages/Details";
import AddEquipments from "../Pages/AddEquipments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:3000/equipments')
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
                loader: ()=> fetch('http://localhost:3000/equipments')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:3000/equipments/${params.id}`)
            },
            {
                path: '/addEquipments',
                element: <AddEquipments></AddEquipments>
            }
        ]
    },
]);

export default router;