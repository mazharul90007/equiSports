
import { Link, useLoaderData } from "react-router-dom";


const Equipments = () => {
    const equipments = useLoaderData();
    console.log(equipments);
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}



                            {
                                equipments.map(equipment => <tr key={equipment._id}>
                                    {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{equipment.ItemName}</td>
                                    <td>{equipment.CategoryName}</td>
                                    <td>$ {equipment.Price}</td>
                                    <th>
                                        <Link to={`/details/${equipment._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>

                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div >
    );
};

export default Equipments;