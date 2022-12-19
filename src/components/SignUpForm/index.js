import { Component } from "react";
import {
  Container,
  Flex,
  Spacer,
  Card,
  Button,
  XSText,
  BigText,
  MediumText,
} from "../../ui";
import { Input } from "./styles";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    accountType: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, accountType } = this.state;
      const formData = {
        name,
        email,
        accountType,
        password,
      };
      // The promise returned by the signUp method
      // will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch {
      // An err occured
      // Probably due to duplicate email
      this.setState({ error: "Sign-up failed. Try again." });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <Container small>
          <BigText>TalentPool</BigText>
          <Spacer small/>
          <MediumText>
            Welcome to our job posting website! We are dedicated to connecting
            talented individuals with exciting career opportunities. Whether
            you're a seasoned professional looking for a new challenge or a
            recent graduate eager to start your career, we have something for
            everyone.
          </MediumText>
          <Spacer small/>
          <Card as="form" autoComplete="off" onSubmit={this.handleSubmit}>
            <Flex column>
              <XSText>Name</XSText>
              <Spacer extraSmall />
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <Spacer small />
              <XSText>Email</XSText>
              <Spacer extraSmall />
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <Spacer small />
              <XSText>Password</XSText>
              <Spacer extraSmall />
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <Spacer small />
              <XSText>Confirm</XSText>
              <Spacer extraSmall />
              <Input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <Spacer small />
              <Button type="submit" disabled={disable} wide>
                Sign Up
              </Button>
            </Flex>
          </Card>
        </Container>
        <p className="error-message"> {this.state.error}</p>
      </>
    );
  }
}
