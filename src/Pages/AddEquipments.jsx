import { FaFootballBall } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { BiCricketBall } from "react-icons/bi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { PiFootballHelmetDuotone } from "react-icons/pi";


const AddEquipments = () => {

    const handleAddEquipments = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const coffee = { name, chef, supplier, taste, category, details, photo }

        console.log(coffee);
    }

    return (
        <div className="bg-[#f4f3f1] md:w-10/12 mx-auto md:p-8 rounded-lg">
            <div >
                <h2 className="text-amber-700 text-center font-semibold text-3xl">Add Your Favourite Items <br /> with Customization</h2>
                <div className="flex items-center justify-center my-5 text-6xl gap-8">
                    <FaFootballBall />
                    <IoFootball />
                    <BiCricketBall />
                    <MdOutlineSportsVolleyball />
                    <PiFootballHelmetDuotone />

                </div>
            </div>
            <div className="">
                <form onSubmit={handleAddEquipments} className="card-body">
                    {/* Row name and Chef */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Name"
                                name="name"
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
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Row Supplier and Taste */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Equipment Price"
                                name="price"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Equipment Rating"
                                name="rating"
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Row Category and Details */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Equipment Customization"
                                name="customization"
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
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Row Category and Details */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input
                                type="date"
                                
                                name="processingTime"
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
                                name="details"
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
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="px-3 py-1 md:py-2 text-amber-700 font-semibold bg-amber-50 rounded-md shadow hover:bg-amber-100 border border-amber-700 active:scale-95 active:shadow-inner transition transform italic">Add Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipments;