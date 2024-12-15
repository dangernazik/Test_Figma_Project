import logo from "../../assets/img.png";
import LoginInformation from "../loginComponents/LoginInformation.jsx";
import LoginForm from "../loginComponents/LoginForm.jsx";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white gap-10">
            <img className="w-[240px] h-[42px]" src={logo} alt="logo"/>
            <div className="bg-white rounded-[25px] w-[751px] h-[485px] flex flex-row justify-between border-2 border-black">
                <LoginForm/>
                <LoginInformation/>
            </div>
        </div>
    );
};

export default LoginPage;