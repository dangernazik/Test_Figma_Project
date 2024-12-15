import WeOffer from "./WeOffer.jsx";
import {contact, dollar, lightning, star1} from "../../assets/index.js";

const Information = () => {
    return (
        <div className="w-[293px] h-full bg-black text-white p-8 flex flex-col justify-evenly rounded-tr-[23px] rounded-br-[23px]">
            <h3 className="text-2xl font-bold mb-4">Get Your FREE <br/> 30-Days Trial Now!</h3>
            <WeOffer img={dollar} name={"Absolutely FREE"} desc={"No hidden charges, No credit card required"}/>
            <WeOffer img={lightning} name={"Fast & Easy"} desc={"Get access instantly, no downloads required"}/>
            <WeOffer img={contact} name={"Your Own Data"} desc={"Enjoy the Free Trial with your company data"}/>
            <WeOffer img={star1} name={"Unlimited Features"} desc={"Access all features of the world's #1 business software!"}/>
            <p className="">
                Call us at <span className="text-[#04AA00] font-semibold text-[14px]">800 1301 448</span>
            </p>
        </div>
    );
};

export default Information;