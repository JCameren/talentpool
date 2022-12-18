import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { NavHeader, Logo, NavLink } from "./style";
import { Spacer, Flex, Container, Button } from "../../ui";
import logo from "../../images/logo.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const ProfileTabActive = () => {
    setActiveTab("account")
  }

  const JobPostCreationTabActive = () => {
    setActiveTab("post")
  }

  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <NavHeader>
        <Container large>
          <Flex as="nav" spaceBetween>
            <Logo as={Link} to="/">
              <img src={logo} alt="website logo" />
            </Logo>
            { user && 
                         <ul>
                         <NavLink
                           as={Link}
                           to="/post"
                           onClick={JobPostCreationTabActive}
                           className={activeTab === "post" ? "active" : ''}
                         >
                           Create Job Posting
                         </NavLink>
                         <NavLink
                           as={Link}
                           to="/account"
                           onClick={ProfileTabActive}
                           className={activeTab === "account" ? "active" : ''}
                         >
                           Profile
                         </NavLink>
                         <Button onClick={handleLogOut}>log Out</Button>
                         {/* <Link onClick={handleLogOut}>Log Out</Link> */}
                       </ul>
             }
             { !user && <Button as={Link} to="/login">Sign In</Button> }
          </Flex>
        </Container>
      </NavHeader>
      <Spacer large />
    </>
  );
};

export default Navbar;
