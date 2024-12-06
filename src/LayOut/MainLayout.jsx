import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;