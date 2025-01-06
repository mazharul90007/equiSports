import nike from '../assets/nike.jpg';
import addidas from '../assets/addidas.png';
import puma from '../assets/puma.png';
import under from '../assets/under.png';
import reebok from '../assets/reebok.png';
import wilson from '../assets/wilson.png';
import yonex from '../assets/yonex.jpeg';
import spalding from '../assets/spalding.png';
import Marquee from "react-fast-marquee";
import { authContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Partner = () => {
    const { isDarkMode } = useContext(authContext);
    return (
        <div className={isDarkMode? "text-white" : "text-black"}>
            <section className=" py-6 rounded-xl">
                <div className="container mx-auto">
                    <div className='mb-5'>
                        <h2 className="text-4xl font-semibold text-center">Our Brand Partners</h2>
                        <p className='text-center'>Get Best Discount from our Brand partners through the year..</p>
                    </div>
                    <div className='flex gap-4'>
                    <Marquee speed={40}>
                        {/* Nike */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={nike}
                                alt="Nike logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Nike</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Official Partner</p>
                        </div>
                        {/* Adidas */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={addidas}
                                alt="Adidas logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Adidas</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Silver Partner</p>
                        </div>
                        {/* Puma */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={puma}
                                alt="Puma logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Puma</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Bronze Partner</p>
                        </div>
                        {/* Under Armour */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={under}
                                alt="Under Armour logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Under Armour</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Equipment Partner</p>
                        </div>
                        {/* Reebok */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={reebok}
                                alt="Reebok logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Reebok</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Registered Supplier</p>
                        </div>
                        {/* Wilson */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={wilson}
                                alt="Wilson logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Wilson</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Sports Gear Partner</p>
                        </div>
                        {/* Yonex */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={yonex}
                                alt="Yonex logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Yonex</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Badminton Partner</p>
                        </div>
                        {/* Spalding */}
                        <div className="text-center mx-2 border border-secondary border-b-2 border-r-2 rounded shadow">
                            <img
                                src={spalding}
                                alt="Spalding logo"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold">Spalding</h3>
                            <p className={isDarkMode ? "text-sm text-primary" : "text-sm text-gray-500"}>Basketball Partner</p>
                        </div>
                        </Marquee>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Partner;