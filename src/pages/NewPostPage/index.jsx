import Seo from "../../components/Seo/index";
import NewPostForm from "../../components/NewPostForm";

const NewPostPage = ({ addPost }) => {
  return (
    <>
      <Seo
        title="New Job Listing"
        description="Create a new listing for the next career opportunity!"
      />
      <NewPostForm addPost={addPost} />
    </>
  );
};

export default NewPostPage;
