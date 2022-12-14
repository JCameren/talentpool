import { Component } from "react";
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
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
      const { name, email, password } = this.state;
      const formData = {
        name,
        email,
        password,
      };
      // The promise returned by the signUp method
      // will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData)
      // Baby step!
      this.props.setUser(user)
    } catch {
      // An err occured
      // Probably due to duplicate email
      this.setState({ error: "Sign-up failed. Try again." });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message"> {this.state.error}</p>
      </div>
    );
  }
}
