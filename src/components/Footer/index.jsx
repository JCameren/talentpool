import React from "react";
import { Logo } from "../Navbar/style";
import { Container, Flex, Spacer, XSText } from "../../ui/index";
import { FooterWrapper } from "./styles";
import logo from "../../images/logo-2.png";

const Footer = () => {
  return (
    <>
      <Spacer large />
      <FooterWrapper>
        <Container large>
          <Flex spaceBetween alCenter>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <XSText>&copy; 2022 Talentpool All Rights Reserved</XSText>
          </Flex>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
