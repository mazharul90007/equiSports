import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut, setUser } = useContext(authContext);

    const list = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/equipments'}>Equipments</NavLink></li>
        <li><NavLink to={'/addEquipments'}>Add Equipments</NavLink></li>
        <li><NavLink to={'/myEquipments'}>My Equipment List</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('LogOut Successfull')
                toast.success('LogOut Successfully Done')
                setUser(null)
            })
            .catch(() => {
                // toast.error('Something Wrong. Try Again')
                // console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">EquiSports</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user &&
                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                        <img src={user.photoURL} alt="user" className="w-12 h-12 rounded-full" />
                    </div>
                }
                <div>
                    {
                        user && user?.email ? <div onClick={handleLogOut} className="">
                            <Link to={'/'} className="btn border border-green-400">Sign Out</Link>
                        </div>
                            :
                            <div className="">
                                <Link to={'/login'} className="btn border border-green-400">LogIn / SignUp</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;