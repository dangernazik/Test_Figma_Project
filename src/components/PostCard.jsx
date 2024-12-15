import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const PostCard = ({ post, style }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData && userData.isLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [localStorage.getItem("user")]);

    const handleClick = () => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate(`/posts/${post.id}`);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`card w-[471px] h-auto gap-5 cursor-pointer rounded-[24px] flex ${style ? 'flex-row' : 'flex-col'}`}
        >
            <div className={style ? "card-photo" : "bg-[#F5F5F5] rounded-[16px] h-[136px] w-[246px]"}></div>
            <div className="w-[246px] h-auto flex flex-col gap-5">
                <p className={`${style ? "mt-2" : " " }uppercase text-[12px] font-medium opacity-40`}>wednesday 12, march 2024</p>
                <div className="w-[246px] h-auto flex flex-col gap-[5px]">
                    <p className="w-full h-auto text-[17px] font-semibold">{post.title}</p>
                    <p className="overflow-hidden w-full h-[27px] text-[14px] font-semibold opacity-40">
                        {post.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    style: PropTypes.bool.isRequired
};

export default PostCard;