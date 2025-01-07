import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const ProductCard = ({ equipment }) => {
    console.log(equipment);
    const navigate = useNavigate();
    const handleViewDetails = (link) => {
        navigate(`/details/${link}`)
    }
   
    return (
        <div>
            <div onClick={() => handleViewDetails(equipment._id)} key={equipment._id} className="flex flex-col h-full cursor-pointer">
                <div className="card bg-base-100 rounded shadow h-full flex flex-col">
                    <figure>
                        <img src={equipment.Image} alt="Equipment" />
                    </figure>
                    <div className="card-body p-4 flex flex-col justify-between flex-grow">
                        <h2 className="font-semibold">{equipment.ItemName}</h2>
                        <div className="flex items-center justify-between">
                            <p>${equipment.Price}</p>
                            <div className="rating rating-sm">
                                {[...Array(5)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name={`rating-${equipment._id}`}
                                        className={`mask mask-star-2 bg-yellow-400 ${index < Math.round(equipment.Rating) ? '' : 'opacity-20'}`}
                                        readOnly
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
ProductCard.propTypes = {
    equipment: PropTypes.array
}