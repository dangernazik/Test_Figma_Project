import star from "../../assets/star.png"
import PropTypes from 'prop-types';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearUser, fetchUsers} from "../../redux/slices/userSlice.js";

const MainTitle = ({ post, showFeatured, textStyles }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);
    const [isLoggedIn, setIsLoggedIn] = useState(null); // `null` означає, що стан ще не визначено

    // Перевіряємо, чи користувач залогінений
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.isLoggedIn) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [localStorage.getItem('user')]);

    // Завантажуємо дані користувача тільки якщо він залогінений
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(clearUser());
            dispatch(fetchUsers(post.userId));
        }
    }, [dispatch, isLoggedIn, post.userId]);

    const handleLinkClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault(); // Забороняємо перехід по лінку
            navigate('/login'); // Перенаправляємо на сторінку входу
        }
    };



    return (
        <Link to={`/posts/${post.id}`} onClick={handleLinkClick} className={`w-full h-auto flex flex-col gap-[20px] items-center ${textStyles ? "" : "mt-5"}`}>
            {showFeatured && (
                <div className="w-auto h-auto text-[20px] font-medium flex flex-row items-center gap-[5px]">
                    <img className="w-[18px] h-[18px]" src={star} alt="star" />
                    Featured
                </div>
            )}

            <div className={textStyles ? "wrap-style" : "w-full h-[103px] flex flex-col gap-[20px] items-center justify-center"}>
                <p className={textStyles ? "title-style" : "w-[700px] h-auto text-[32px] font-semibold text-center"}>{post.title}</p>
                <p className={textStyles ? "body-style" : "w-full h-auto text-[14px] font-normal text-center opacity-40"}>{post.body}</p>
            </div>

            <div
                className={textStyles ? "wrap-day-style" : "w-full h-auto flex flex-row gap-[20px] justify-center items-center"}>
                <p className="uppercase text-[12px] font-medium opacity-40">wednesday 12, march 2024</p>
                <div className="w-auto h-auto flex flex-row justify-center items-center border rounded-[24px]">
                    <div className="w-[24px] h-[24px] bg-black opacity-20 rounded-[50px] m-1"></div>
                    <p className="text-[14px] font-medium mr-2">{user?.name || "Loading..."}</p>
                </div>
            </div>

        </Link>
    );
};

MainTitle.propTypes = {
    post: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    showFeatured: PropTypes.bool.isRequired,
    textStyles: PropTypes.object
};
export default MainTitle;