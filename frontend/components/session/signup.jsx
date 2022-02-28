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
    // the pushed path is to be updated once the login routes have been setup.
    this.props
      .createNewUser(this.state)
      .then(() => this.props.history.push("/"));
    //   .then(() => this.props.history.push("/login"));
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
    return (
      <div className="session-form">
        <form className="session-form-box" onSubmit={this.handleSubmit}>
          {/* <h2>Welcome to ResTable!</h2> */}
          <div className="session-reminder">
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
          </div>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
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
            <button className="signup-button" type="submit">
              Sign up
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
