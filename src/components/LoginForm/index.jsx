import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../store/user-slice/user-actions";
import { useNavigate } from "react-router-dom";
import { Container, Spacer, Flex, MediumText, Card, Button } from "../../ui";
import { Input } from "../SignUpForm/styles";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(logInUser(credentials))
    navigate("/")
  }

  return (
    <>
      <Container small>
        <Card>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Flex column>
              <MediumText as="label">Email</MediumText>
              <Spacer extraSmall />
              <Input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <Spacer small />
              <MediumText as="label">Password</MediumText>
              <Spacer extraSmall />
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <Spacer small />
              <Button as="button" type="submit" wide>
                Log In
              </Button>
            </Flex>
          </form>
        </Card>
      </Container>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}
