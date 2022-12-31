import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import { showPostDetails } from "../../store/post-slice/post-actions";
import {
  Container,
  Button,
  BigText,
  MediumText,
  SmallText,
  Spacer,
} from "../../ui/index";
import Seo from "../../components/Seo/index";
import { PreserveTextFormat } from "./styles";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.postDetails)
  const user = useSelector(state => state.user.user)
  const { postId } = useParams();
  const {
    title,
    description,
    company,
    location,
    salary,
    employer,
    applicants,
  } = post;

  useEffect(() => {
    dispatch(showPostDetails(postId))
  }, [postId, dispatch])

  const userAppliedToJobPost = async (id, post) => {
    const postApplied = await postAPI.applyToJob(id, post);
    console.log(postApplied.applicants);
    if (postApplied) navigate("/account");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userAppliedToJobPost(post._id, post);
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
