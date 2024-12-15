import {useState} from "react";
import {arrow} from "../../assets/index.js";
import {Link, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUserData = JSON.parse(localStorage.getItem("user"));

        if (storedUserData) {

            if (storedUserData.email === formData.email && storedUserData.password === formData.password) {

                storedUserData.isLoggedIn = true;
                localStorage.setItem("user", JSON.stringify(storedUserData));
                navigate("/");
            } else {
                alert("Invalid email or password!");
            }
        } else {
            alert("No user found!");
        }
    };

    return (
        <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Sign in</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-1">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-[394px] h-[48px] px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 mt-6 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-[394px] h-[48px] px-4 py-2 border rounded-[4px] focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="flex justify-between items-center ">
                    <a href="#" className="text-[#04AA00] text-sm mt-4 mb-4">
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-[394px] h-[48px] bg-[#04AA00] text-white px-4 py-2 rounded-[4px] hover:bg-green-800 transition flex flex-row justify-between items-center"
                >
                    Sign In
                    <img className="w-[24px] h-[24px]" src={arrow} alt="arrow" />
                </button>
            </form>
            <p className="text-gray-600 text-sm mt-8">
                Don&apos;t have an account?{" "}
                <Link to={`/signup`} className="text-[#04AA00] font-semibold ">
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;