import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import { Container, Flex, Button, BigText, MediumText, SmallText, XSText, Spacer } from '../../ui/index'

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState({});
  const [error, setError] = useState("")
  const { postId } = useParams();
  const { title, description, company, location, salary, createdAt } = postDetails
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
    <Container large>
      <BigText>{title}</BigText>
      <Spacer small />
      <MediumText>{company}</MediumText>
      <Spacer small />
      <MediumText>{location}</MediumText>
      <Spacer small />
      <form onSubmit={handleSubmit}>
        <Button as="button" type="submit">Apply to Job</Button>
      </form>
      <Spacer small />
      <SmallText>Full Job Description</SmallText>
      <Spacer extraSmall></Spacer>
      <MediumText>{description}</MediumText>
      {error && <p>{error}</p> }
    </Container>
  );
};

export default PostDetailsPage;
