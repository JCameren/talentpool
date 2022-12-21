import Seo from "../../components/Seo/index";
import LoginForm from "../../components/LoginForm";

const LoginInPage = ({ signInUser }) => {
  return (
    <>
      <Seo
        title="Sign In"
        description="Continue your journey where you left off!"
      />
      <LoginForm signInUser={signInUser} />
    </>
  );
};

export default LoginInPage;
