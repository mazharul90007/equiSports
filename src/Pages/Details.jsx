import { useLoaderData } from "react-router-dom";


const Details = () => {
    const equipment = useLoaderData();
    console.log(equipment);
    return (
        <div className="card bg-base-100 shadow-xl w-10/12 mx-auto">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="items-center text-center my-10 v">
                <div className="overflow-x-auto">
                    <table className="table text-xlc">
                        {/* head
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Name</th>
                                <td>{equipment.ItemName}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>Category</th>
                                <td>{equipment.CategoryName}</td>
                            </tr>
                            {/* row 3*/}
                            <tr>
                                <th>Price</th>
                                <td>$ {equipment.Price}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>Rating</th>
                                <td>{equipment.Rating}/5.0</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>Description</th>
                                <td>{equipment.Description}</td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                <th>Customization</th>
                                <td>{equipment.Customization}</td>
                            </tr>
                            {/* row 7 */}
                            <tr>
                                <th>Processing Time</th>
                                <td>{equipment.ProcessingTime}</td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                <th>Stock</th>
                                <td>{equipment.StockStatus}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Details;