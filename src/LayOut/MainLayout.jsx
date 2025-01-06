import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "../Components/Footer";


const MainLayout = () => {

   
    return (
        <div className="bg-[#f8f4e9]">
            <Navbar></Navbar>
            <div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;