import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { NavHeader } from "./style";
import { Spacer } from "../../ui";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <NavHeader>
        <nav>
          <Link to="/">Logo</Link>
          <Link to="/account">Profile Page</Link>
          <Link to="/post">Create Job Listing</Link>
          &nbsp; | &nbsp;
          <h2>Welcome, {user.name}</h2>
          <Link onClick={handleLogOut}>Log Out</Link>
        </nav>
      </NavHeader>
      <Spacer large/>
    </>
  );
};

export default Navbar;
