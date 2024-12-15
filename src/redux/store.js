import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice.js";
import usersReducer from "./slices/userSlice.js";
import postReducer from "./slices/postSlice.js";



export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        post: postReducer,
    },
});