import React from "react";
import SignUpForm from "../../components/SignUpForm";
import { Container } from "../../ui";

const AuthPage = ({ setUser }) => {
  return (
    <Container>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      {/* <LoginForm setUser={setUser}/> */}
    </Container>
  );
};

export default AuthPage;
