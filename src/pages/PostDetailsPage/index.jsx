import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import React from "react";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState({});
  const [error, setError] = useState("")
  const { postId } = useParams();
  useEffect(() => {
    const getPost = async () => {
      const postFetched = await postAPI.show(postId);
      setPostDetails(postFetched);
    };
    getPost();
  }, [postId]);

  const userAppliedToJobPost = async (id, post) => {
    const postApplied = await postAPI.applyToJob(id, post);
    console.log(postApplied.applicants)
    if (postApplied) navigate("/account");
    setError("Something went wrong...")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userAppliedToJobPost(postDetails._id, postDetails);
  };
  return (
    <div>
      {postDetails.title}, {postDetails.description}
      <form onSubmit={handleSubmit}>
        <button>Apply to Job</button>
      </form>
      {error && <p>{error}</p> }
    </div>
  );
};

export default PostDetailsPage;
