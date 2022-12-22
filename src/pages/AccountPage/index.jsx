import React from "react";
import { useState, useEffect } from "react";
import * as postAPI from "../../utilities/post-api";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Flex,
  Grid,
  BigText,
  MediumText,
  SmallText,
  XSText,
  Spacer,
  Card,
  Button,
} from "../../ui";
import { RxAvatar } from "react-icons/rx";
import { GiPaperClip } from "react-icons/gi";
import { SalaryFocusSpan } from "../../components/JobPost/styles";
import Seo from "../../components/Seo";

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

  const unapplyFromPost = async (postId) => {
    const unappliedFromPost = await postAPI.unapplyFromPost(postId);
    setPosts(posts.filter((post) => post._id !== unappliedFromPost._id));
  };

  useEffect(() => {
    const getJobsListed = async () => {
      const jobsListingsFetched = await postAPI.getJobListings();
      setJobListings(jobsListingsFetched);
    };
    getJobsListed();
  }, []);

  const deleteJobListing = async (postId) => {
    const deletedJobListing = await postAPI.deleteJobListing(postId);
    setJobListings(
      jobListings.filter(
        (jobListing) => jobListing._id !== deletedJobListing._id
      )

    );
    navigate('/account')
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
                <>
                  <Link to={`/post/${post._id}`}>
                    <Card>
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
                </>
              ))
            : null}
          {user?.type === "employer" && jobListings.length > 0
            ? jobListings.map((listing) => (
                  <Card>
                    <Flex alCenter spaceBetween>
                      <MediumText>{listing.title}</MediumText>
                      <MediumText>
                        <GiPaperClip />
                      </MediumText>
                    </Flex>
                    <Spacer extraSmall />
                    <SmallText>{listing.company}</SmallText>
                    <Spacer extraSmall />
                    <SmallText>{listing.location}</SmallText>
                    <Spacer extraSmall />
                    <SmallText>
                      <SalaryFocusSpan>{listing.salary}</SalaryFocusSpan>
                    </SmallText>
                    <Spacer extraSmall />
                    <Button onClick={() => deleteJobListing(listing._id)}>
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
