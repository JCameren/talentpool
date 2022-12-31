import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/post-slice/post-actions";
import { BigText, SmallText, Spacer, Container } from "../../ui";
import Seo from "../../components/Seo/index";
import JobPosts from "../../components/JobPosts";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.allPosts);
  const { name } = user;

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      <Seo
        title="Career Search"
        description="Begin your journey here and take a look at all job listings to see which one is a good fit for you."
      />
      <Container large>
        <BigText>Welcome back, {name}!</BigText>
        <Spacer small />
        <SmallText>
          Browse the latest listing posted to the site here. Click on one to
          view the details and apply.
        </SmallText>
      </Container>
      <Spacer medium />
      <JobPosts posts={posts} />
    </>
  );
};

export default HomePage;
