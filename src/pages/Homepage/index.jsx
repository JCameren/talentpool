import React from "react";
import { BigText, SmallText, Spacer, Container } from "../../ui";
import JobPosts from "../../components/JobPosts";

const HomePage = ({ user, posts }) => {
  return (
    <>
      <Container large>
        <BigText>Welcome back, {user.name}!</BigText>
        <Spacer small />
        <SmallText>
          Browse the latest listing posted to the site here. Click on one to view the details and apply.
        </SmallText>
      </Container>
      <Spacer medium />
      <JobPosts posts={posts} />
    </>
  );
};

export default HomePage;
