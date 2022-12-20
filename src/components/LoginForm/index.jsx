import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Container, Spacer, Flex, MediumText, Card, Button } from "../../ui";
import { Input } from "../SignUpForm/styles";

export default function LoginForm({ signInUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      signInUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
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
