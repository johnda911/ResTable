import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/"));
    // to be commented in once complete the restaurants routes
    // .then(() => this.props.history.push("/restaurants"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Welcome back to ResTable, please log In!</h2>
        {this.renderErrors()}
        <form className="session-form-box">
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button className="signin-button" onClick={this.handleSubmit}>
              Sign in
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
