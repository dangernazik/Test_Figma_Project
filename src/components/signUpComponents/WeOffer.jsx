import PropTypes from "prop-types";


const WeOffer = ({img, name, desc}) => {
    return (
        <div className="w-[229px] h-[76px] flex flex-row justify-between gap-2">
            <img className="w-[24px] h-[24px]" src={img} alt="logo"/>
            <div className="flex flex-col">
                <p className="text-[17px] ">{name}</p>
                <p className="text-[14px] text-[#484848]">{desc}</p>
            </div>
        </div>
    );
};
WeOffer.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};
export default WeOffer;