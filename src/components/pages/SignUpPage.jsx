import Form from "../signUpComponents/Form.jsx";
import Information from "../signUpComponents/Information.jsx";
import  logo  from "../../assets/img.png"
const SignUpPage = () => {


    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white gap-10">
            <img className="w-[240px] h-[42px]" src={logo} alt="logo"/>
            <div className="bg-white rounded-[25px] w-[751px] h-[586px] flex flex-row justify-between border-2 border-black">
                <Form/>
                <Information/>
            </div>
        </div>
    );
};

export default SignUpPage;
