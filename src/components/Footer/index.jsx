import React from "react";
import { Container, Flex, Spacer } from "../../ui/index";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <>
      <Spacer small />
      <FooterWrapper>
        <Container large>
          <div>Footer here</div>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
