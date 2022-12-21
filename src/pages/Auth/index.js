import React from "react";
import SignUpForm from "../../components/SignUpForm";
import HeroBanner from "../../components/HeroBanner/styles";
import { Container, Flex } from "../../ui";
import hero from "../../images/homepage-hero-banner.svg";

const AuthPage = ({ setUser }) => {
  return (
    <Container large>
      <Flex alCenter flexEnd spaceBetween largeRowGap>
        <HeroBanner>
          <img src={hero} alt="hero banner" />
        </HeroBanner>
          <SignUpForm setUser={setUser} />
      </Flex>
    </Container>
  );
};

export default AuthPage;
