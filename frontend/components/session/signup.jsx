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
          {/* <h2>Welcome to ResTable!</h2> */}
          <div className="session-reminder">
            Please {this.props.formType} or {this.props.navLink}
          </div>
          {this.renderErrors()}
          <br />
          <label>
            Your fullname:
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
              className="login-input"
            />
          </label>
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
            <button onClick={this.handleSubmit}>Sign up</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
