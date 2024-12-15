import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOnePost = createAsyncThunk("post/fetchOnePost", async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
});

const postSlice = createSlice({
    name: "post",
    initialState: { post: {}, status: "idle"},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOnePost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchOnePost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.post = action.payload;
            })
            .addCase(fetchOnePost.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default postSlice.reducer;