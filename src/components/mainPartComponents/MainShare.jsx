import {facebook, x, youtube} from "../../assets/index.js"

const MainShare = () => {
    return (
        <div className="w-[151] h-[24] flex flex-row gap-[12px] items-center">
            <p className="text-[14px]">Share to</p>
            <div className="flex flex-row gap-[8px]">
                <a href="https://www.facebook.com/">
                <img className="w-[23px] h-[23px]" src={facebook} alt="facebook"/>
                </a>
                <a href="https://x.com/home">
                <img className="w-[23px] h-[23px]" src={x} alt="x"/>
                </a>
                <a href="https://www.youtube.com/">
                <img className="w-[23px] h-[23px]" src={youtube} alt="youtube"/>
                </a>
            </div>
        </div>
    );
};

export default MainShare;