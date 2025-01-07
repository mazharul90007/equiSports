import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import ProductCard from "./ProductCard";

const TopRated = () => {
    const { isDarkMode } = useContext(authContext);

    const [topRatedProducts, setTopRatedProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                const data = res.data;
                const sortedRating = [...data].sort((a, b) => b.Rating - a.Rating);
                setTopRatedProducts(sortedRating);
            })
    }, []);

    // console.log(topRatedProducts)

    return (
        <div className="my-16" id="topRatedProducts">
            <div>
                <div className={isDarkMode ? 'text-white text-center' : 'text-center'}>
                    {/* <Lottie animationData={ball} style={{ height: '6rem' }} /> */}
                    <p className="text-xl">Customer Reviewed</p>
                    <h3 className="text-4xl font-semibold">Top Rated Products</h3>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-8">
                    {
                        topRatedProducts.map(product =><ProductCard key={product._id} equipment={product}></ProductCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default TopRated;
