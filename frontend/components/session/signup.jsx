import React from "react";

class Signup extends React.Component {
  constructor(props) {
    // console.log("======= signup");
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openLogInModal = this.openLogInModal.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = Object.assign({}, this.state);
    this.props.processForm(formUser).then(this.props.closeModal);
    // this.props
    //   .createNewUser(this.state)
    //   .then(() => this.props.history.push("/"));
  }

  openLogInModal(e) {
    e.preventDefault();
    this.props.closeModal();
    // this.props.clearErrors();
    this.props.openModal("login");
  }

  renderErrors() {
    const errors = this.props.errors[0];
    // console.log(errors);

    return (
      <div className="session-errors">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form className="session-form-box" onSubmit={this.handleSubmit}>
          <div className="x-icon" onClick={this.props.closeModal}></div>
          <div className="session-reminder">Let's get you signed up!</div>
          {this.renderErrors()}
          <br />
          <label>
            <br />
            <input
              type="text"
              placeholder="Your username"
              value={this.state.username}
              onChange={this.handleInput("username")}
              className="login-input"
            />
          </label>
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
          <button className="login-button" onClick={this.handleSubmit}>
            Create a New Account
          </button>
          <div className="session-message">Already have an account?</div>
          <div>
            <button
              className="login-link-container"
              onClick={this.openLogInModal}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
