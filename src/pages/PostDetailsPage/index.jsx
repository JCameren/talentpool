import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postAPI from '../../utilities/post-api'
import React from "react";

const PostDetailsPage = () => {
  const [postDetails, setPostDetails] = useState({})
  const { postId } = useParams();
  useEffect( () => {
    const getPost = async () => {
      const postFetched = await postAPI.show(postId)
      setPostDetails(postFetched)
    }
    getPost()
  }, [postId])
  return (<div>{postDetails.title}, {postDetails.description}</div>);
};

export default PostDetailsPage;
