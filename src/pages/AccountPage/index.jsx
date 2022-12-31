import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApplicationsOfUser,
  getJobListingOfEmployer,
  deleteJobListing,
} from "../../store/post-slice/post-actions";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Flex,
  Grid,
  BigText,
  MediumText,
  SmallText,
  Spacer,
  Card,
  Button,
} from "../../ui";
import { RxAvatar } from "react-icons/rx";
import { GiPaperClip } from "react-icons/gi";
import { SalaryFocusSpan } from "../../components/JobPost/styles";
import Seo from "../../components/Seo";

const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.userPosts);

  useEffect(() => {
    if (user.type === 'employer') {
      dispatch(getJobListingOfEmployer());
    } 
    if (user.type === 'seeker') {
      dispatch(getApplicationsOfUser());
    }
  }, [dispatch, user]);

  const deletePost = async (postId) => {
    dispatch(deleteJobListing(postId));
    navigate("/account");
  };

  return (
    <>
      <Seo
        title={user.name}
        description={
          user.type === "seeker"
            ? "View jobs you have applied to here."
            : "View career opportunities you have listed."
        }
      />
      <Container large>
        <Flex column alCenter>
          <BigText>
            <RxAvatar />
          </BigText>
          <MediumText>Hey, {user.name}!</MediumText>
        </Flex>
      </Container>
      <Spacer small />
      <Container large>
        <Grid>
          {user?.type === "seeker" && posts.length > 0
            ? posts.map((post) => (
                  <Link to={`/post/${post._id}`} key={post._id}>
                    <Card key={post._id}>
                      <Flex alCenter spaceBetween>
                        <MediumText>{post.title}</MediumText>
                        <MediumText>
                          <GiPaperClip />
                        </MediumText>
                      </Flex>
                      <Spacer extraSmall />
                      <SmallText>{post.company}</SmallText>
                      <Spacer extraSmall />
                      <SmallText>{post.location}</SmallText>
                      <Spacer extraSmall />
                      <SmallText>
                        <SalaryFocusSpan>{post.salary}</SalaryFocusSpan>
                      </SmallText>
                      <Spacer extraSmall />
                    </Card>
                  </Link>
              ))
            : null}
          {user?.type === "employer" && posts.length > 0
            ? posts.map((post) => (
                <Card key={post._id}>
                  <Flex alCenter spaceBetween>
                    <MediumText>{post.title}</MediumText>
                    <MediumText>
                      <GiPaperClip />
                    </MediumText>
                  </Flex>
                  <Spacer extraSmall />
                  <SmallText>{post.company}</SmallText>
                  <Spacer extraSmall />
                  <SmallText>{post.location}</SmallText>
                  <Spacer extraSmall />
                  <SmallText>
                    <SalaryFocusSpan>{post.salary}</SalaryFocusSpan>
                  </SmallText>
                  <Spacer extraSmall />
                  <Button onClick={() => deletePost(post._id)}>
                    Delete Job Listing
                  </Button>
                </Card>
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
};

export default AccountPage;
