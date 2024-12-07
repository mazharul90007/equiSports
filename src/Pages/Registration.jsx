import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { authContext } from "../Provider/AuthProvider";

const Registration = () => {

    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate()

    const { handleRegister, profileUpdate } = useContext(authContext);

    const handleRegistrationForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least 6 character and include Uppercase, lowercase and a number')
            return;
        }

        // console.log(name, photo, email, password);


        handleRegister(email, password)
            .then(() => {
                toast.success('Registration Successfull')

                profileUpdate(name, photoURL)
                    .then(() => {
                        console.log('Profile Updated')
                        // toast('Profile Updated Successfully')
                    })
                    .catch(() => {
                        console.log('Something wrong')
                        // console.log(error)
                    })
                // console.log(res)
                navigate('/');

            })
            .catch(error => {
                // console.log('Error', error);
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email is Already Registered')
                }
                else {
                    toast.error("Registration failed. Please Try Again")
                }
            })



    }
    return (
        <div className="flex items-center justify-center md:h-screen my-5 md:p-10 w-11/12 md:w-10/12 mx-auto">
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
                        Register securely to enjoy personalized experiences and exclusive benefits.
                    </p>

                </div>

                {/* Right Side */}
                <div className="md:w-1/2 bg-white p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">EquiSports</h2>
                    <p className="text-lg text-gray-500 mb-4">
                        Welcome to EquiSports
                    </p>
                    <form onSubmit={handleRegistrationForm}>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>
                        {/* PhotoURL */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">PhotoURL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Your PhotoURL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 relative">
                            <label className="block text-gray-600 mb-2">Password</label>
                            <input
                                name="password"
                                type={showPass ? 'text' : 'password'}
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                            <div onClick={() => setShowPass(!showPass)} className="absolute right-5 top-11 cursor-pointer">
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }


                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Register
                        </button>

                        {/* Create Account */}
                        <p className="mt-4 text-center text-sm text-gray-500">
                            Already have an Account?
                            <span className="text-green-500 hover:underline"> <Link to={'/login'} >
                                LogIn
                            </Link></span>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Registration;