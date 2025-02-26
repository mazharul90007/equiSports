import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../Provider/AuthProvider";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(authContext);
    const { user, logOut, setUser } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                setUser(null);
            })
            .catch(() => {
                toast.error("Something went wrong. Try again");
            });
    };

    const list = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#FFD700] font-bold border-b-2 border-[#E6BE00]"
                            : "hover:text-[#FFD700] hover:border-b-2 hover:border-[#E6BE00] transition"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/equipments"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#FFD700] font-bold border-b-2 border-[#E6BE00]"
                            : "hover:text-[#FFD700] hover:border-b-2 hover:border-[#E6BE00] transition"
                    }
                >
                    Equipments
                </NavLink>
            </li>
            {user?.email && (
                <>
                    <li>
                        <NavLink
                            to="/addEquipments"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#FFD700] font-bold border-b-2 border-[#E6BE00]"
                                    : "hover:text-[#FFD700] hover:border-b-2 hover:border-[#E6BE00] transition"
                            }
                        >
                            Add Equipments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myEquipments"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#FFD700] font-bold border-b-2 border-[#E6BE00]"
                                    : "hover:text-[#FFD700] hover:border-b-2 hover:border-[#E6BE00] transition"
                            }
                        >
                            My Equipment List
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <nav className="bg-[#6B705C] shadow-lg sticky top-0 z-50">
            <div className="md:w-11/12 mx-auto  py-2 flex justify-between items-center">
                {/* Navbar Start */}
                <div className="flex items-center gap-4">
                    {/* Dropdown for Mobile */}
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-white rounded-box w-52"
                        >
                            {list}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="text-3xl text-[#F8F4E9] font-bold tracking-wide hover:opacity-90 transition"
                    >
                        EquiSports
                    </Link>
                </div>

                {/* Navbar Center (Desktop Menu) */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#F8F4E9] space-x-6">{list}</ul>
                </div>

                {/* Navbar End */}
                <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    {user && (
                        <div
                            className="tooltip tooltip-bottom"
                            data-tip={user.displayName || "User"}
                        >
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                        </div>
                    )}

                    {/* Log In / Log Out Button */}
                    <div>
                        {user?.email ? (
                            <button
                                onClick={handleLogOut}
                                className="btn btn-outline border-white text-[#F8F4E9] hover:bg-[#F8F4E9] hover:text-[#E6BE00] transition"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-outline border-white text-[#F8F4E9] hover:bg-[#F8F4E9] hover:text-[#E6BE00] transition"
                            >
                                Log In / Sign Up
                            </Link>
                        )}
                    </div>

                    {/* Dark Mode Toggle */}
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={60}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
