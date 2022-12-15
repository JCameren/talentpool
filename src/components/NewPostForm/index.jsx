import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as postAPI from '../../utilities/post-api'

const NewPostForm = () => {
  const navigate = useNavigate()
  const [postData, setPostData] = useState({
    title: "",
    salary: "",
    description: "",
  });
  const {title, salary, description } = postData

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }
  const addNewPost = async (e) => {
    e.preventDefault()
    try {
        const post = await postAPI.create(postData)
        if (post) {
            navigate("/")
        }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <form onSubmit={addNewPost}>
      <h3>Create new job listing</h3>
      <label htmlFor="">Job Title</label>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <label htmlFor="">Salary</label>
      <input type="text" name="salary" value={salary} onChange={handleChange} />
      <label htmlFor="">Job Description</label>
      <input type="text" name="description" value={description} onChange={handleChange} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPostForm;
