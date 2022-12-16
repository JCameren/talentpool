import React from "react";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import { Link } from "react-router-dom";

const AccountPage = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postFetched = await postAPI.getPostsApplied();
      setPosts(postFetched);
    };
    getPosts();
  }, []);
  return (
    <>
      <div>Hello {user.name}</div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link to={`/post/${post._id}`}>
            <div
              key={post._id}
              style={{
                width: "max-content",
                borderRadius: "5px",
                border: "thin dashed black",
              }}
            >
              <h3>{post.title}</h3>
              <h3>{post.salary}</h3>
              <h3>{post.description}</h3>
              <h4>Posted by: {post.employer.name}</h4>
              <h4>Posted on: {post.createdAt.toLocaleString()}</h4>
            </div>
          </Link>
        ))
      ) : (
        <h1>You haven't applied to any jobs.</h1>
      )}
    </>
  );
};

export default AccountPage;
