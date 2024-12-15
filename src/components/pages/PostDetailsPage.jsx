import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchOnePost} from "../../redux/slices/postSlice.js";
import {fetchUsers} from "../../redux/slices/userSlice.js";
import Navbar from "../Navbar.jsx";
import PostDetails from "../detailsComponents/PostDetails.jsx";
import PostsList from "../PostsList.jsx";
import {readmore} from "../../assets/index.js";


const PostDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {post} = useSelector((state) => state.post);
    const {user} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchOnePost(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (post.userId) {
            dispatch(fetchUsers(post.userId));
        }
    }, [dispatch, post.userId]);


    return (
        <>
            <Navbar/>
            <div className="flex flex-row justify-evenly  relative overflow-hidden">
                <PostDetails key={post.id} post={post} user={user}/>
                <div className="flex flex-col gap-7 mt-5">
                    <div className="flex flex-row justify-between w-[471px] h-auto items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <img className="h-[18px] w-[18px]" src={readmore} alt=""/>
                            <p className="text-[20px]">Related Articles</p>
                        </div>
                        <button
                            className="w-[114px] min-h-[38px] rounded-[24px] bg-white text-black text-[14px] border">Read
                            more
                        </button>
                    </div>
                    <PostsList style={true}/>
                </div>
                <div className={"z-[-1]  rounded-full green__gradient1"}></div>
                <div className={"z-[-1]  rounded-full green__gradient2"}></div>
            </div>

        </>
    );
};

export default PostDetailsPage;