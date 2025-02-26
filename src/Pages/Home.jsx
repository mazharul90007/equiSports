import { Link, useLoaderData} from "react-router-dom";
import Banner from "../Components/Banner";
import Service from "../Components/Service";
// import Lottie from "lottie-react";
// import ball from '../assets/ball.json';
import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoTennisballSharp } from "react-icons/io5";
import { BiCricketBall } from "react-icons/bi";
import { Rotate, Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import Partner from "../Components/Partner";

import ProductCard from "../Components/ProductCard";
import TopRated from "../Components/TopRated";

const Home = () => {
    const equipments = useLoaderData();
    const { isDarkMode } = useContext(authContext);
    console.log(equipments);


    return (
        <div className={isDarkMode ? 'bg-[#343A34]' : ''}>
            <div className="pb-10">
                <Banner />

                {/* Category Section */}
                <div className="w-11/12 mx-auto mt-12">
                    <div className={isDarkMode ? 'text-white text-center' : 'text-center'}>
                        {/* <Lottie animationData={ball} style={{ height: '6rem' }} /> */}
                        <p className="text-xl">Best Seller Product of this Week</p>
                        <h3 className="text-4xl font-semibold">Deal of The Week</h3>
                    </div>
                    <div className={isDarkMode ? 'text-white flex gap-4 md:gap-20 justify-center my-2' : 'flex gap-4 md:gap-20 justify-center my-2'}>
                        <Slide direction="left">
                            <div>
                                <div className="text-7xl"><MdOutlineSportsSoccer /></div>
                                <button className="mx-auto flex py-1 px-3 rounded text-buttonText border bg-[#6B705C] border-b-2 border-[#E6BE00] shadow hover:scale-95 transition-transform">Soccer</button>
                            </div>
                        </Slide>

                        <div>
                            <Rotate>
                                <div className="text-7xl"><IoTennisballSharp /></div>
                            </Rotate>
                            <button className="mx-auto flex py-1 px-3 rounded text-buttonText border bg-[#6B705C] border-b-2 border-[#E6BE00] shadow hover:scale-95 transition-transform">Tennis</button>
                        </div>

                        <Slide direction="right">
                            <div>
                                <div className="text-7xl"><BiCricketBall /></div>
                                <button className="mx-auto flex py-1 px-3 rounded text-buttonText border bg-[#6B705C] border-b-2 border-[#E6BE00] shadow hover:scale-95 transition-transform">Cricket</button>
                            </div>
                        </Slide>
                    </div>

                    {/* Card Section */}
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-8">
                        {
                            equipments.slice(0, 8).map(equipment => <ProductCard key={equipment._id} equipment={equipment}></ProductCard>)
                        }
                    </div>
                    <Link to={'/equipments'}>
                        <button className="mx-auto flex py-1 px-3 rounded text-buttonText border bg-[#6B705C] border-b-2 border-[#E6BE00] shadow hover:scale-95 transition-transform">View All</button>
                    </Link>

                    <div>
                        <TopRated></TopRated>
                    </div>

                    <div>
                        <Service />
                    </div>
                    <div>
                        <Partner />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
