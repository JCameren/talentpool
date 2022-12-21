import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import {
  Container,
  Flex,
  Button,
  BigText,
  MediumText,
  SmallText,
  XSText,
  Spacer,
} from "../../ui/index";
import Seo from "../../components/Seo/index";
import { PreserveTextFormat } from "./styles";

const PostDetailsPage = ({ user }) => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState({});
  const [error, setError] = useState("");
  const { postId } = useParams();
  const {
    title,
    description,
    company,
    location,
    salary,
    createdAt,
    employer,
    applicants,
  } = postDetails;
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    const getPost = async () => {
      const postFetched = await postAPI.show(postId);
      setPostDetails(postFetched);
    };
    getPost();
  }, [postId]);

  const userAppliedToJobPost = async (id, post) => {
    const postApplied = await postAPI.applyToJob(id, post);
    console.log(postApplied.applicants);
    if (postApplied) navigate("/account");
    setError("Something went wrong...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userAppliedToJobPost(postDetails._id, postDetails);
  };

  const showApps = () => {
    console.log(applicants);
  };
  return (
    <>
      <Seo title={title} description={description} />
      <Container large>
        <BigText>{title}</BigText>
        <Spacer small />
        <SmallText>Company</SmallText>
        <Spacer extraSmall />
        <MediumText>{company}</MediumText>
        <Spacer small />
        <SmallText>Location</SmallText>
        <Spacer extraSmall />
        <MediumText>{location}</MediumText>
        <Spacer small />
        <SmallText>Salary</SmallText>
        <Spacer extraSmall />
        <MediumText>{salary}</MediumText>
        <Spacer small />
        <SmallText>Full Job Description</SmallText>
        <Spacer extraSmall></Spacer>
        <MediumText>
          <PreserveTextFormat>{description}</PreserveTextFormat>
        </MediumText>
        <Spacer small />
        {user._id === employer && (
          <SmallText>*You are the employer of this job listing.*</SmallText>
        )}
        {applicants?.includes(user._id) && (
          <Button disabled secondary>
            Applied
          </Button>
        )}
        {user._id !== employer && !applicants?.includes(user._id) ? (
          <form onSubmit={handleSubmit}>
            <Button as="button" type="submit">
              Apply to Job
            </Button>
          </form>
        ) : null}
      </Container>
    </>
  );
};

export default PostDetailsPage;
