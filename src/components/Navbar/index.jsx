import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice/user-slice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import * as userService from "../../utilities/users-service";
import { NavHeader, Logo, NavLink, MobileNavBtn, MobileNav } from "./style";
import { Spacer, Flex, Container, Button } from "../../ui";
import Overlay from "../../components/Overlay/index";
import logo from "../../images/logo.png";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)
  const [activeTab, setActiveTab] = useState("");
  const [sideNavActive, setSideNavActive] = useState(false);

  const ProfileTabActive = () => {
    setActiveTab("account");
  };

  const JobPostCreationTabActive = () => {
    setActiveTab("post");
  };

  const sideNavStateHandler = () => {
    setSideNavActive((prevState) => !prevState);
  };

  const handleLogOut = () => {
    dispatch(userActions.logOut())
    navigate("/")
  };
  return (
    <>
      {sideNavActive && <Overlay onClick={sideNavStateHandler} />}
      {sideNavActive && (
                <MobileNav>
                  {user && (
                <>
                {user.type === "employer" && (
                  <>
                  <Spacer small />
                  <NavLink
                    as={Link}
                    to="/post"
                    onClick={sideNavStateHandler}
                    className={activeTab === "post" ? "active" : ""}
                  >
                    Create Job Posting
                  </NavLink>
                  <Spacer small />
                  </>
                )}
                <NavLink
                  as={Link}
                  to="/account"
                  onClick={sideNavStateHandler}
                  className={activeTab === "account" ? "active" : ""}
                >
                  Profile
                </NavLink>
                <Spacer small />
                <Button onClick={handleLogOut}>Log Out</Button>
                {/* <Link onClick={handleLogOut}>Log Out</Link> */}
                </>
            )}
            
            {!user && (
              <ul>
                <Button as={Link} to="/login">
                  Login
                </Button>
              </ul>
            )}
                </MobileNav>
              )}
      <NavHeader>
        <Container large>
          <Flex as="nav" spaceBetween>
            <Logo as={Link} to="/">
              <img src={logo} alt="website logo" />
            </Logo>
            {user && (
              <ul className="nav-elements">
                {user?.type === "employer" && (
                  <NavLink
                    as={Link}
                    to="/post"
                    onClick={JobPostCreationTabActive}
                    className={activeTab === "post" ? "active" : ""}
                  >
                    Create Job Posting
                  </NavLink>
                )}
                <NavLink
                  as={Link}
                  to="/account"
                  onClick={ProfileTabActive}
                  className={activeTab === "account" ? "active" : ""}
                >
                  Profile
                </NavLink>
                <Button onClick={handleLogOut}>Log Out</Button>
                {/* <Link onClick={handleLogOut}>Log Out</Link> */}
              </ul>
            )}

            {!user && (
              <ul className="nav-elements">
                <Button as={Link} to="/login">
                  Login
                </Button>
              </ul>
            )}
            <MobileNavBtn>
              <BsThreeDotsVertical onClick={sideNavStateHandler} />
            </MobileNavBtn>
          </Flex>
        </Container>
      </NavHeader>
      <Spacer large />
    </>
  );
};

export default Navbar;
