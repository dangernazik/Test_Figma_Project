import MainShare from "../mainPartComponents/MainShare.jsx";
import MainPost from "../mainPartComponents/MainPost.jsx";
import MainTitle from "../mainPartComponents/MainTitle.jsx";
import PropTypes from 'prop-types';
const PostDetails = ({ post }) => {

    return (
        <div className="w-[553px] h-[584px] flex flex-col gap-5 mt-5">
            <MainTitle post={post} showFeatured={false}
                       textStyles={true}/>
            <MainPost textStyles={true}/>
            <MainShare/>
        </div>
    );
};

PostDetails.propTypes = {
    post: PropTypes.object.isRequired,
};
export default PostDetails;