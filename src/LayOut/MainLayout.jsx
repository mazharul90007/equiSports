import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "../Components/Footer";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const MainLayout = () => {

    const {isDarkMode} = useContext(authContext);
    return (
        <div className={ isDarkMode && 'bg-slate-800'}>
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