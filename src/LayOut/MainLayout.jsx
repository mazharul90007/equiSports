import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;