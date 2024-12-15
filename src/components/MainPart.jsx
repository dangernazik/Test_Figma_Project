import MainTitle from "./mainPartComponents/MainTitle.jsx";
import MainPost from "./mainPartComponents/MainPost.jsx";
import MainShare from "./mainPartComponents/MainShare.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchPosts} from "../redux/slices/postsSlice.js";


const MainPart = () => {
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

            for (let i = 0; i < 1 && remainingPosts.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * remainingPosts.length);
                randomPostsList.push(remainingPosts[randomIndex]);
                remainingPosts.splice(randomIndex, 1);
            }

            setRandomPosts(randomPostsList);
        }
    }, [posts]);

    return (
        <div className="w-[1154px] h-[671px] justify-self-center flex flex-col gap-[20px] items-center">
            {randomPosts.map((post) => (
                <MainTitle key={post.id} post={post} showFeatured={true}/>
            ))}
            <MainPost/>
            <MainShare/>


        </div>
    );
};

export default MainPart;