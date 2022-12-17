import React from "react";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import { Link, useNavigate } from "react-router-dom";

const AccountPage = ({ user }) => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [jobListings, setJobListings] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postFetched = await postAPI.getPostsApplied();
      setPosts(postFetched);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getJobsListed = async () => {
      const jobsListingsFetched = await postAPI.getJobListings();
      setJobListings(jobsListingsFetched);
    };
    getJobsListed();
  }, []);

  const deleteJobListing = async (postId) => {
    const deletedJobListing = await postAPI.deleteJobListing(postId)
    setJobListings(jobListings.filter((jobListing) => jobListing._id !== deletedJobListing._id))
  }

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
      <hr />
      {jobListings.length > 0 ? (
        jobListings.map((joblisting) => (
          <div>
            <h2>{joblisting.title}</h2>
            <p>{joblisting.applicants.name}</p>
            <button onClick={() => deleteJobListing(joblisting._id)}>Delete Job Listing</button>
          </div>
        ))
      ) : (
        <h2>You have not listed any jobs.</h2>
      )}
    </>
  );
};

export default AccountPage;
