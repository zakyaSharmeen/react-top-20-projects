import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const response = await axios.post(POSTS_URL, post);
  return response.data;
});

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await axios.put(`${POSTS_URL}/${post.id}`, post);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axios.delete(`${POSTS_URL}/${id}`);
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((p) => p.id === action.payload.id);
        state.posts[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
