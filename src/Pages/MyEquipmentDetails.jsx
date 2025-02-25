import { useLoaderData } from "react-router-dom";


const MyEquipmentDetails = () => {

    const myEquipment = useLoaderData();

    return (
        <div className="card bg-base-100 shadow-xl w-11/12 md:w-10/12 mx-auto">
            <figure className="px-10 pt-10">
                <img
                    src={myEquipment.Image}
                    alt="Equipment"
                    className="rounded-xl" />
            </figure>
            <div className="items-center text-center my-10 v">
                <div className="overflow-x-auto">
                    <table className="table text-xlc">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Name</th>
                                <td>{myEquipment.ItemName}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>Category</th>
                                <td>{myEquipment.CategoryName}</td>
                            </tr>
                            {/* row 3*/}
                            <tr>
                                <th>Price</th>
                                <td>$ {myEquipment.Price}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>Rating</th>
                                <td>{myEquipment.Rating}/5.0</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>Description</th>
                                <td>{myEquipment.Description}</td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                <th>Customization</th>
                                <td>{myEquipment.Customization}</td>
                            </tr>
                            {/* row 7 */}
                            <tr>
                                <th>Processing Time</th>
                                <td>{myEquipment.ProcessingTime}</td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                <th>Stock</th>
                                <td>{myEquipment.StockStatus}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEquipmentDetails;