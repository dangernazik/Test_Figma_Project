import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {arrow} from "../../assets/index.js";

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify(formData));

        navigate("/login");
    };

    return (
        <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Sign up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-600 mb-1">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-600 mb-1">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-600 mt-6 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-[#04AA00] text-sm mt-6 mb-6">
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#04AA00] text-white px-2 py-2 rounded-[4px] hover:bg-green-800 transition flex flex-row justify-between "
                >
                    Sign Up
                    <img className="w-[24px] h-[24px]" src={arrow} alt="arrow"/>
                </button>
            </form>
            <p className="text-gray-600 text-sm mt-8">
                Already have an account?{" "}
                <Link to={`/login`} className="text-[#04AA00] font-semibold ">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default Form;
