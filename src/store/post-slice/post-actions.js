import { postActions } from "./post-slice";
import * as postAPI from "../../utilities/post-api";

export const getAllPosts = () => {
  return async (dispatch) => {
    const allPosts = async () => {
      return await postAPI.index();
    };

    try {
      const posts = await allPosts();
      dispatch(postActions.getAllPosts(posts));
    } catch (err) {
      throw new Error("Fetching job listings failed.");
    }
  };
};

export const showPostDetails = (postId) => {
  return async (dispatch) => {
    const postFetched = async () => {
      return await postAPI.show(postId);
    };

    try {
      const post = await postFetched();
      dispatch(postActions.showPostDetails(post));
    } catch (err) {
      throw new Error("Failed to fetch selected post.");
    }
  };
};

export const getApplicationsOfUser = () => {
  return async (dispatch) => {
    const applicationsFetched = async () => {
      return await postAPI.getPostsApplied();
    };

    try {
      const applications = await applicationsFetched();
      dispatch(postActions.getUsersPosts(applications));
    } catch (err) {
      throw new Error(
        "Retrieval of applications belonging to the user failed."
      );
    }
  };
};

export const getJobListingOfEmployer = () => {
  return async (dispatch) => {
    const jobListingsFetched = async () => {
      return await postAPI.getJobListings();
    };

    try {
      const jobListings = await jobListingsFetched();
      dispatch(postActions.getUsersPosts(jobListings));
    } catch (err) {
      throw new Error("Retrieval of job lisings posted by this user failed.");
    }
  };
};

export const addNewPost = (postData) => {
  return async (dispatch) => {
    const addPost = async () => {
      return await postAPI.create(postData);
    };

    try {
      const newPost = await addPost();
      dispatch(postActions.addPost(newPost));
    } catch (err) {
      throw new Error("Creation of new post failed.");
    }
  };
};

export const deleteJobListing = (postId) => {
  return async (dispatch) => {
    const deletedJobListing = async () => {
      return await postAPI.deleteJobListing(postId);
    };

    try {
      const postToBeDeleted = await deletedJobListing();
      dispatch(postActions.deletePost(postToBeDeleted));
    } catch (err) {
      throw new Error(`Failed to delete job posting`);
    }
  };
};
