
import { IoBasketballOutline } from "react-icons/io5";
import { FaFootballBall } from "react-icons/fa";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import Lottie from "lottie-react";
import onlineShopping from '../../public/online-shopping.json'
import { authContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Service = () => {
    const { isDarkMode } = useContext(authContext);
    return (
        <div className={isDarkMode? "hero text-white rounded-xl" : "hero text-secondary rounded-xl"}>
            <div className="hero-content flex-col gap-6 lg:flex-row">
                <div className="lg:w-1/2">
                        <Lottie animationData={onlineShopping}></Lottie>
                </div>
                <div className="lg:w-1/2 py-10 ">
                    <div className='my-6'>
                        <p className="text-xl font-semibold"> Our Services</p>
                        <h1 className="text-4xl font-semibold">E-COMMERCE</h1>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <div className='text-5xl'>
                                <IoBasketballOutline />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>FIND THE BEST DEALS</h3>
                                <p>We Provide the best deals for largest Collection of Equipments</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='text-5xl'>
                            <FaFootballBall />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>INSTANT PAYMENTS</h3>
                                <p>We Provide the best deals for largest Collection of Equipments</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='text-5xl'>
                            <GiAmericanFootballHelmet />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>24/7 CUSTOMER SERVICE</h3>
                                <p>We Provide the best deals for largest Collection of Equipments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;