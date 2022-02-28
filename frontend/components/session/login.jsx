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
    const formUser = Object.assign({}, this.state);
    this.props.processForm(formUser).then(this.props.closeModal);
    // to be commented in once complete the restaurants routes
    // .then(() => this.props.history.push("/restaurants"));
  }

  renderErrors() {
    const validErrors = this.props.errors.filter((err) => err.length > 0);
    return (
      <div className="session-errors">
        {validErrors.length > 0 && (
          <ul>
            {validErrors.map((error, i) => (
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
            Welcome back to ResTable!
            <br />
            Please log in or {this.props.navLink}
            {this.renderErrors()}
          </div>
          <br />
          <label>
            Your email:
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
              className="login-input"
            />
          </label>
          <label>
            Your password:
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              className="login-input"
            />
            <br />
            <button onClick={this.handleSubmit}>Sign in</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
