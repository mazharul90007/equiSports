import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center space-y-6 mt-28">
            <h2 className="text-5xl text-red-500 font-bold">Opps....!</h2>
            <div className="text-2xl font-semibold text-green-600  space-y-3 mb-10">
                <p>No Content Available at this Moment</p>
                <p>Or</p>
                <p className="text-purple-500 text-3xl">Page Not Found</p>
            </div>
            <div>
                <NavLink to={'/'}><button className="btn btn-warning">Go to Home</button></NavLink>
            </div>

        </div>
    );
};

export default Error;