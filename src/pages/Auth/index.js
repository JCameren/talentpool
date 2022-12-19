import React from "react";
import SignUpForm from "../../components/SignUpForm";
import HeroBanner from "../../components/HeroBanner/styles";
import { Container, Flex, BigText } from "../../ui";
import hero from "../../images/homepage-hero-banner.svg";

const AuthPage = ({ setUser }) => {
  return (
    <Container large>
      <Flex alCenter flexStart spaceBetween>
        {/* <h1>AuthPage</h1> */}
        <HeroBanner>
          <img src={hero} alt="hero banner" />
        </HeroBanner>
          {/* <BigText>TalentPool</BigText> */}
          <SignUpForm setUser={setUser} />
      </Flex>
    </Container>
  );
};

export default AuthPage;
