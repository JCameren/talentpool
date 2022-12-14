import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/post-slice/post-actions";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Flex,
  Card,
  Spacer,
  BigText,
  MediumText,
  XSText,
} from "../../ui/index";
import { Input } from "../SignUpForm/styles";

const NewPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    salary: "",
    description: "",
    company: "",
    location: "",
  });
  const { title, salary, description, company, location } = postData;

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(addNewPost(postData));
    navigate("/account");
  };

  return (
    <Container small>
      <BigText>
        Join the Growing Community of Employers on Our Job Forum by Creating a
        New Job Listing
      </BigText>
      <Spacer medium />
      <Card as="form" onSubmit={addPost}>
        <Flex column>
          <MediumText bold>Create new job listing</MediumText>
          <Spacer small />
          <XSText as="label">Job Title</XSText>
          <Spacer extraSmall />
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          <Spacer small />
          <XSText as="label">Salary</XSText>
          <Spacer extraSmall />
          <Input
            type="text"
            name="salary"
            value={salary}
            onChange={handleChange}
            required
          />
          <Spacer small />
          <XSText as="label">Company Name</XSText>
          <Spacer extraSmall />
          <Input
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
            required
          />
          <Spacer small />
          <XSText as="label">Location</XSText>
          <Spacer extraSmall />
          <Input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            required
          />
          <Spacer small />
          <XSText as="label">Job Description</XSText>
          <Spacer extraSmall />
          <Input
            as="textarea"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
          <Spacer small />
          <Button as="button" type="submit" wide>
            Create Post
          </Button>
        </Flex>
      </Card>
    </Container>
  );
};

export default NewPostForm;
