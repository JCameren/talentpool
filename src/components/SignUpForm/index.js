import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/user-slice/user-actions";
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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "seeker",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signUpUser(formData));
  };

  return (
    <>
      <Container small>
        <BigText>TalentPool</BigText>
        <Spacer small />
        <MediumText>
          Welcome to our job posting website! We are dedicated to connecting
          talented individuals with exciting career opportunities. Whether
          you're a seasoned professional looking for a new challenge or a recent
          graduate eager to start your career, we have something for everyone.
        </MediumText>
        <Spacer small />
        <Card as="form" autoComplete="off" onSubmit={handleSubmit}>
          <Flex column>
            <XSText>Name</XSText>
            <Spacer extraSmall />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Spacer small />
            <XSText>Email</XSText>
            <Spacer extraSmall />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Spacer small />
            <XSText>I am ...</XSText>
            <Input
              as="select"
              value={formData.type}
              onChange={handleChange}
              name="type"
              required
            >
              <Input as="option" value="seeker">
                Looking for a Job
              </Input>
              <Input as="option" value="employer">
                Looking for Talent
              </Input>
            </Input>
            <Spacer small />
            <XSText>Password</XSText>
            <Spacer extraSmall />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Spacer small />
            <XSText>Confirm</XSText>
            <Spacer extraSmall />
            <Input
              type="password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
            <Spacer small />
            <Button type="submit" as="button" wide>
              Sign Up
            </Button>
          </Flex>
        </Card>
      </Container>
    </>
  );
};

export default SignUpForm;
