import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e, isDemoUser) {
    e.preventDefault();
    // const formUser = Object.assign({}, this.state);
    const formUser = isDemoUser
      ? {
          email: "demouser@gmail.com",
          password: "123456",
        }
      : {
          email: this.state.email,
          password: this.state.password,
        };
    this.props.processForm(formUser).then(this.props.closeModal);
  }

  openSignUpModal(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.openModal("signup");
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
            {this.renderErrors()}
          </div>
          <br />
          <label>
            <br />
            <input
              type="text"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleInput("email")}
              className="login-input"
            />
          </label>
          <label>
            <br />
            <input
              type="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              className="login-input"
            />
            <br />
          </label>
          <button
            className="login-button"
            onClick={(e) => this.handleSubmit(e, false)}
          >
            Sign in
          </button>
          <div className="session-message">New to ResTable?</div>
          <div>
            <button
              className="login-link-container"
              onClick={this.openSignUpModal}
            >
              Sign up
            </button>
          </div>
          <div className="session-message">Or sign in as a</div>
          <div>
            <button
              className="login-button"
              onClick={(e) => this.handleSubmit(e, true)}
            >
              Demo User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
