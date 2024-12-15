import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import PostCard from "./PostCard";
import { fetchPosts } from "../redux/slices/postsSlice.js";
import PropTypes from "prop-types";


const PostsList = ({style}) => {
    const dispatch = useDispatch();
    const { posts, status } = useSelector((state) => state.posts);
    const [randomPosts, setRandomPosts] = useState([]);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (posts.length > 0) {
            const remainingPosts = [...posts];
            const randomPostsList = [];

            for (let i = 0; i < 5 && remainingPosts.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * remainingPosts.length);
                randomPostsList.push(remainingPosts[randomIndex]);
                remainingPosts.splice(randomIndex, 1);
            }

            setRandomPosts(randomPostsList);
        }
    }, [posts]);



    return (
        <div className={style ? "list-posts-container" : "h-auto w-[1350px] border flex flex-row justify-self-center rounded-[24px] gap-5 p-5 mb-[100px] mt-[10px] bg-white"}>
            {randomPosts.map((post) => (
                <PostCard key={post.id} post={post} style={style}/>
            ))}
        </div>
    );
};
PostsList.propTypes = {
    style: PropTypes.bool
};
export default PostsList;