import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { authContext } from "../Provider/AuthProvider";


const MyEquipments = () => {
    const {user} = useContext(authContext)
    // const loadedMyEquipments = useLoaderData();


    const [myEquipments, setMyEquipments] = useState([])
    console.log(myEquipments)

    const url = `http://localhost:3000/equipments?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyEquipments(data)
        })
    },[url])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/equipments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = myEquipments.filter(myEquipment => myEquipment._id !== id);
                            setMyEquipments(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="min-h-[calc(100vh_-_440px)] w-11/12 md:w-10/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    myEquipments.map(myEquipment => <div key={myEquipment._id}>
                        <div className="card bg-base-100  shadow">
                            <figure>
                                <img
                                className="w-[350px] h-[220px]"
                                    src={myEquipment.Image}
                                    alt="Shoes" />
                                    
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{myEquipment.ItemName}</h2>
                                <div className="flex items-center justify-between">
                                    <p>Price: ${myEquipment.Price}</p>
                                    <p className="text-end">Rating: {myEquipment.Rating}</p>
                                </div>
                                <p>Category: {myEquipment.CategoryName}</p>
                                <p>Customization: {myEquipment.Customization}</p>
                                <p>Processing Time: {myEquipment.ProcessingTime}</p>
                                <p>Uploaded From: {myEquipment.email}</p>
                                <div className="flex justify-between items-center mt-8">
                                    <div>
                                        <Link to={`/myEquipmentDetails/${myEquipment._id}`}><button className="text-center py-2 px-4 border border-red-500 w-fit mx-auto rounded-lg">Details</button></Link>
                                    </div>

                                    <div>
                                        <Link to={`/myEquipmentUpdate/${myEquipment._id}`}><button className="text-center py-2 px-4 border border-red-500 w-fit mx-auto rounded-lg">Update</button></Link>
                                    </div>

                                    <button onClick={() => handleDelete(myEquipment._id)} className="text-center py-2 px-4 border border-red-500 w-fit mx-auto rounded-lg">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyEquipments;