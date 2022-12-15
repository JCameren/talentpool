import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
  
  return (
    <>
       {/* Add container component to clean this up possibly */}
      { posts.map(post => (
        <Link to={`/post/${post._id}`}>
        <div  key={post._id} style={{ width: 'max-content', borderRadius: '5px', border: 'thin dashed black' }}>
          <h3>{post.title}</h3>
          <h3>{post.salary}</h3>
          <h3>{post.description}</h3>
          <h4>Posted by: {post.employer.name}</h4>
          <h4>Posted on: {post.createdAt.toLocaleString()}</h4>
        </div>
        </Link>
      )) }
    </>
  );
};

export default HomePage;