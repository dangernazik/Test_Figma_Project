import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
});

const usersSlice = createSlice({
    name: "users",
    initialState: { user: null, statusUsers: "idle" },
    reducers: {
        clearUser: (state) => {
            state.user = null;
            state.statusUsers = "idle";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.statusUsers = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.statusUsers = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.statusUsers = "failed";
            });
    },
});

export const { clearUser } = usersSlice.actions;
export default usersSlice.reducer;