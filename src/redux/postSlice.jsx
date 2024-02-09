import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//create the thunk to fetch data from an api

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        id: 1,
        title: "test",
        author: "Bruno",
      },
    ],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
