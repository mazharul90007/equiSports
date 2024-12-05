import img from '../assets/banner2.jpg'
import { IoBasketballOutline } from "react-icons/io5";
import { FaFootballBall } from "react-icons/fa";
import { GiAmericanFootballHelmet } from "react-icons/gi";

const Service = () => {
    return (
        <div className="hero bg-base-200 my-16 rounded-xl">
            <div className="hero-content flex-col gap-6 lg:flex-row">
                <div className="lg:w-1/2">
                    <img
                        src={img}
                        className=" rounded-lg shadow" />
                </div>
                <div className="lg:w-1/2 py-10 ">
                    <div className='my-6'>
                        <p className="text-xl">Service</p>
                        <h1 className="text-4xl font-semibold">E-COMMERCE</h1>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4 hover:text-red-500'>
                            <div className='text-5xl'>
                                <IoBasketballOutline />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>FIND THE BEST DEALS</h3>
                                <p>We Provide the best deals for largest Collection of Equipments</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 hover:text-red-500'>
                            <div className='text-5xl'>
                            <FaFootballBall />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold'>INSTANT PAYMENTS</h3>
                                <p>We Provide the best deals for largest Collection of Equipments</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 hover:text-red-500'>
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