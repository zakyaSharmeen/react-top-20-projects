import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost, fetchPosts, updatePost } from "./postsSlice";
// import { fetchPosts, addPost, updatePost, deletePost } from './postsSlice';

export default function PostsList() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  const [form, setForm] = useState({ title: "", body: "", id: null });

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updatePost(form));
    } else {
      dispatch(addPost(form));
    }
    setForm({ title: "", body: "", id: null });
  };

  return (
    <div>
      <h2>Posts</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />
        <input
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          placeholder="Body"
        />
        <button type="submit">{form.id ? "Update" : "Add"} Post</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <button onClick={() => setForm(post)}>Edit</button>
            <button onClick={() => dispatch(deletePost(post.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
