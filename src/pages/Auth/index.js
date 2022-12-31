import React from "react";
import SignUpForm from "../../components/SignUpForm";
import HeroBanner from "../../components/HeroBanner/styles";
import Seo from "../../components/Seo/index";
import { Container, Flex } from "../../ui";
import hero from "../../images/homepage-hero-banner.svg";

const AuthPage = () => {
  return (
    <>
      <Seo title="Sign Up" description="Sign in to access a network of career opportunities!"/>
      <Container large>
        <Flex alCenter flexEnd spaceBetween largeRowGap>
          <HeroBanner>
            <img src={hero} alt="hero banner" />
          </HeroBanner>
          <SignUpForm />
        </Flex>
      </Container>
    </>
  );
};

export default AuthPage;
