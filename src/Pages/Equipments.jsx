
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Equipments = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments)
    // console.log(equipments);

    const handleSort = (sortType)=>{
        if(sortType == 'price'){
            const sortPrice = [...equipments].sort((a , b)=> b.Price - a.Price);
            setEquipments(sortPrice);
        }
    }
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <div>
                <div className="flex mb-6">
                    <div className="dropdown dropdown-left mx-auto">
                        <div tabIndex={0} role="button" className="btn border border-red-500 m-1">Sort By</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                            <li onClick={()=> handleSort('price')}><a>Price</a></li>
                        </ul>
                    </div>
                </div>
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
                                        <div className="items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={equipment.Image}
                                                        alt="Equipment" />
                                                </div>
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