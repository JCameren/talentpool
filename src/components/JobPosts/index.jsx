import React from "react";
import { Container, Grid } from "../../ui";
import JobPost from "../JobPost";

const JobPosts = ({ posts }) => {
  const allJobPosts = posts.map((post) => <JobPost post={post} key={post._id}/>);
  return (
    <Container large>
      <Grid>{allJobPosts}</Grid>
    </Container>
  );
};

export default JobPosts;
