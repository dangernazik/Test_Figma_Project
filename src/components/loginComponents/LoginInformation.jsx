

const LoginInformation = () => {
    return (
        <div className="w-[293px] h-full bg-black text-white p-8 flex flex-col justify-center rounded-tr-[23px] rounded-br-[23px] gap-8">
           <div className="flex flex-row gap-2 justify-center items-center">
            <h3 className="h-[24px] text-2xl font-bold flex justify-center items-center">Kodix</h3>
            <p className="text-[12px] rounded-[4px] text-[#1FFF1A] font-semibold border border-[#1FFF1A] w-[41px] h-[24px] flex items-center justify-center">PRO</p>
           </div>
            <p className="text-[#484848] text-center text-[14px] w-[210px] h-[48px]">
                Unlimited traffic, strategic support, and AI-driven upsells
            </p>
            <p className="text-[#1FFF1A] text-center text-[16px] underline">Learn More</p>
        </div>
    );
};

export default LoginInformation;