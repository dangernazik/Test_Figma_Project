import PropTypes from "prop-types";


const MainPost = ({textStyles}) => {
    return (
        <div className={textStyles ? "post-img" : "w-[894px] h-[339px] bg-[#F5F5F5] rounded-[24px] relative"}>
            <span
                className="w-[93px] h-[20px] absolute bottom-4 left-4 bg-black opacity-40
                text-white px-2 py-1 rounded-[2px] text-[10px] text-center">
    Photo by Antara
  </span>
        </div>
    );
};
MainPost.propTypes = {
    textStyles: PropTypes.object
};
export default MainPost;