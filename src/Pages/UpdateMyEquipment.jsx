import { useLoaderData } from "react-router-dom";
import { FaFootballBall } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { BiCricketBall } from "react-icons/bi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { PiFootballHelmetDuotone } from "react-icons/pi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const UpdateMyEquipment = () => {
    const equipment = useLoaderData()
    // console.log(updateEquipment);

    const handleUpdateEquipments = (e) => {
        e.preventDefault();
        const form = e.target;
        const ItemName = form.name.value;
        const CategoryName = form.category.value;
        const Price = form.price.value;
        const Rating = form.rating.value;
        const Customization = form.customization.value;
        const Description = form.details.value
        const ProcessingTime = form.processingTime.value;
        const StockStatus = form.stock.value;
        const Image = form.photo.value

        const updatedEquipments = {
            ItemName,
            CategoryName,
            Price, 
            Rating,
            Customization,
            Description,
            ProcessingTime,
            StockStatus,
            Image
        }

        console.log(updatedEquipments);
        fetch(`http://localhost:3000/equipments/${equipment._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedEquipments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success('Equipment Updated Successfully')
                }
            })
    }


    return (
        <div className="bg-[#f4f3f1] md:w-10/12 mx-auto md:p-8 rounded-lg">
            <div >
                <h2 className="text-amber-700 text-center font-semibold text-3xl">Update Your Favourite Items <br /> with Customization</h2>
                <div className="flex items-center justify-center my-5 text-6xl gap-8">
                    <FaFootballBall />
                    <IoFootball />
                    <BiCricketBall />
                    <MdOutlineSportsVolleyball />
                    <PiFootballHelmetDuotone />

                </div>
            </div>
            <div className="">
                <form onSubmit={handleUpdateEquipments} className="card-body">
                    {/* Row name and Category */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Name"
                                name="name"
                                defaultValue={equipment.ItemName}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Category"
                                name="category"
                                defaultValue={equipment.CategoryName}
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Row Price and Rating */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Equipment Price"
                                name="price"
                                defaultValue={equipment.Price}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                // type="number"
                                placeholder="Equipment Rating"
                                list="rating-options"
                                name="rating"
                                defaultValue={equipment.Rating}
                                className="input input-bordered"
                                required />
                            <datalist id="rating-options">
                                <option value={'1'}></option>
                                <option value={'2'}></option>
                                <option value={'3'}></option>
                                <option value={'4'}></option>
                                <option value={'5'}></option>
                            </datalist>
                        </div>
                    </div>
                    {/* Row Customization and Details */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Customization"
                                name="customization"
                                defaultValue={equipment.Customization}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Details"
                                name="details"
                                defaultValue={equipment.Description}
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Row Processing Time and Stock */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input
                                type="date"

                                name="processingTime"
                                defaultValue={equipment.ProcessingTime}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Stock</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Equipment Stock"
                                name="stock"
                                defaultValue={equipment.StockStatus}
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Photo URL"
                            name="photo"
                            defaultValue={equipment.Image}
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="px-3 py-1 md:py-2 text-amber-700 font-semibold bg-amber-50 rounded-md shadow hover:bg-amber-100 border border-amber-700 active:scale-95 active:shadow-inner transition transform italic">Update Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyEquipment;