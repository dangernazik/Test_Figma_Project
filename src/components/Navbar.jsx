import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img.png"
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        if (storedUserData && storedUserData.isLoggedIn) {
            setUserData(storedUserData);
        }
    }, []);

    const handleLogout = () => {

        if (userData) {
            userData.isLoggedIn = false;
            localStorage.setItem("user", JSON.stringify(userData));
        }

        setUserData(null);

        navigate("/");
    };


    return (
        <nav className="w-full h-[96px] flex py-6 justify-between items-center navbar border-b bg-white bg-opacity-40">
            <ul className="list-none sm:flex hidden justify-start items-center w-[335px] h-[42px] mr-0">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-normal cursor-pointer text-[14px] h-[14px] 
                        ${active === nav.title ? "text-black" : "text-gray-500"} 
                        ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} 
                        ${index === 0 ? "ml-10" : "mr-0"} `}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`/${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div>
                <img src={logo} alt="logo" className="h-[27px] w-[154px]" />
            </div>

            <div className="w-[237px] h-[42px] flex justify-between me-10">
                {!userData ? (
                    <>
                        <Link to={`/login`}>
                            <button className="w-[114px] h-[42px] text-[14px] bg-white border rounded-[24px]">
                                Log in
                            </button>
                        </Link>
                        <Link to={`/signup`}>
                            <button className="w-[114px] h-[42px] text-[14px] bg-[#04AA00] text-white rounded-[24px]">
                                Sign Up
                            </button>
                        </Link>
                    </>
                ) : (
                    <div className="flex flex-row justify-between items-center gap-3">
                        <p className="font-normal text-[14px] ">{userData.firstName} {userData.lastName}</p>
                        <button
                            onClick={handleLogout}
                            className="w-[114px] h-[42px] text-[14px] bg-red-500 text-white rounded-[24px]"
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
