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
    const validErrors = this.props.errors.filter((err) => err.length > 0);
    return (
      <div>
        {validErrors > 0 && (
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <form className="session-form-box">
          <div className="session-reminder">
            Welcome back to ResTable, please log in or {this.props.navLink}
            {this.renderErrors()}
          </div>
          <br />
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
