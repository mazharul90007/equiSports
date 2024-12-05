import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { authContext } from "../Provider/AuthProvider";

const Login = () => {

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()

    const emailRef = useRef();


    const { handleGoogleLogin, handleLogin, handleForgetPassword } = useContext(authContext);

    const handleGoogleSignin = () => {
        handleGoogleLogin()
            .then(() => {
                toast.success('Google LogIn Successfull')
                navigate(location.state.from);
            })
            .catch(() => {
                toast.error('Something Wrong. Please Try Again')
            })
    }

    const handleLogInForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        handleLogin(email, password)
            .then(() => {

                toast.success('LogIn Successful')
                navigate(location.state.from);
            })
            .catch(() => {
                // toast.error('Invalid Email or Password')
                // console.log('Error', error);
            })
    }

    const handleResetPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Please Enter Valid Email')
        } else {
            handleForgetPassword(email)
                .then(() => {
                    toast.success('Reset Email send, Please check your Email')
                })
                .catch(() => {
                    toast.error('Something Went Wrong. Please Try Again')
                })
        }
    }

    return (
        <div className="flex items-center justify-center md:h-screen  md:p-10">
            {/* Container */}
            <div className="flex flex-col md:flex-row md:max-w-4xl w-full rounded-lg overflow-hidden shadow-lg border border-green-200">
                {/* Left Side */}
                <div className="md:w-1/2 bg-green-200 flex flex-col items-center justify-center p-8">
                    <img
                        src="/login.png"
                        alt="Lovebird Illustration"
                        className=" h-[200px] mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                        Access Your Account to Unlock All Features
                    </h2>
                    <p className="text-center text-gray-500">
                        Sign in securely to enjoy personalized experiences and exclusive benefits.
                    </p>

                </div>

                {/* Right Side */}
                <div className="md:w-1/2 bg-white p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">EquiSports</h2>
                    <p className="text-lg text-gray-500 mb-4">
                        Welcome to EquiSports
                    </p>
                    <form onSubmit={handleLogInForm}>
                        {/* Username/Email */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">Username or Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <p onClick={() => handleResetPass} className="text-right text-sm text-green-500 hover:underline mt-1 cursor-pointer">
                                Forgot password?
                            </p>
                        </div>

                        {/* Sign In */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Sign In
                        </button>

                        <div className="flex items-center my-4">
                            <div className="h-px flex-1 bg-gray-300"></div>
                            <span className="px-4 text-sm text-gray-500">or</span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleSignin}
                            type="button"
                            className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300"
                        >
                            <span className="text-2xl mr-2">
                                <FcGoogle />
                            </span>
                            Sign in with Google
                        </button>

                        {/* Create Account */}
                        <p className="mt-4 text-center text-sm text-gray-500">
                            New to EquiSports?
                            <span className="text-green-500 hover:underline"> <Link to={'/registration'} >
                                Create Account
                            </Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;