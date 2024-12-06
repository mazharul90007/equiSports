import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Service from "../Components/Service";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Lottie from "lottie-react";
import ball from '../assets/ball.json'
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoTennisballSharp } from "react-icons/io5";
import { BiCricketBall } from "react-icons/bi";
import { Rotate, Slide } from "react-awesome-reveal";



const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const equipments = useLoaderData();

    return (
        <div>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />
            <Banner></Banner>
            <div>
                <div className="text-center mt-4">
                    <Lottie animationData={ball} style={{ height: '6rem' }}></Lottie>
                    <p className="text-xl">Best Seller Product of this Week</p>
                    <h3 className="text-4xl font-semibold">Deal of The Week</h3>
                </div>
                <div className="flex gap-4 md:gap-20 justify-center my-5">
                    <Slide direction="left">
                        <div>
                            <div className="text-7xl"><MdOutlineSportsSoccer /></div>
                            <p className="py-2 px-3 border border-purple-500 w-fit rounded-xl font-medium cursor-pointer">Soccer</p>
                        </div>
                    </Slide>

                    <div>
                        <Rotate>
                            <div className="text-7xl"><IoTennisballSharp /></div>
                        </Rotate>
                        <p className="py-2 px-3 border border-purple-500 w-fit rounded-xl font-medium cursor-pointer">Tennis</p>
                    </div>

                    <Slide direction="right">
                        <div >
                            <div className="text-7xl"><BiCricketBall /></div>
                            <p className="py-2 px-3 border border-purple-500 w-fit rounded-xl font-medium cursor-pointer">Cricket</p>
                        </div>
                    </Slide>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {
                        equipments.slice(0, 6).map(equipment => <div key={equipment._id}>
                            <div className="card bg-base-100  shadow">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{equipment.ItemName}</h2>
                                    <div className="flex items-center justify-between">
                                        <p>Price: ${equipment.Price}</p>
                                        <p className="text-end">Rating: {equipment.Rating}</p>
                                    </div>
                                    <Link to={`/details/${equipment._id}`}><button className="text-center py-2 px-4 border border-red-500 w-fit mx-auto rounded-lg">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to={'/equipments'}><button className="mx-auto flex btn btn-warning">View All</button></Link>

                <div>
                    <Service></Service>
                </div>

            </div>
        </div>
    );
};

export default Home;