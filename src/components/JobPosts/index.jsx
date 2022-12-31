import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/post-slice/post-actions";
import { Container, Grid } from "../../ui";
import JobPost from "../JobPost";

const JobPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.allPosts)

  useEffect(() => {
    dispatch(getAllPosts()); 
  }, [dispatch]);

  const allJobPosts = posts.map((post) => <JobPost post={post} key={post._id}/>);
  return (
    <Container large>
      <Grid>{allJobPosts}</Grid>
    </Container>
  );
};

export default JobPosts;
