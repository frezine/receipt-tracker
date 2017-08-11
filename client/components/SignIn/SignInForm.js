import React, { Component } from "react";
import Form from "../SignUp/Form";
import Validate from "../../../server/utils/Validate";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { withRouter } from 'react-router';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      success: false,
      submitted: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid(){
    const { errors, valid } = Validate(this.state);
    if (!valid){
      this.setState({ errors });
    }
    return valid;
  }


  onSubmit(e){
    e.preventDefault();
    if (this.isValid()){
      this.setState({ submitted: true, errors: {} });
      this.props.userSignInRequest(this.state)
      .then(
        (res) => { this.setState({ success: true, submitted: false }) },
        (err) => { this.setState({ submitted: false, errors: err.response.data}) }
      );
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <Form
            name="username"
            value={this.state.username}
            label="Username"
            required={false}
            type="text"
            error={errors.username}
            onChange={this.onChange}
          />
          <Form
            name="password"
            value={this.state.password}
            label="Password"
            required={false}
            type="password"
            error={errors.password}
            onChange={this.onChange}
          />
          <div className="form-group">
            <Link to="/register">Register an account</Link>
          </div>
          <div className="form-group">
            <button disabled={this.state.submitted} className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
        { this.state.success &&
          <Redirect to={{
            pathname: "/dashboard",
            state: {userid: "fake id"}
          }}/>
        }
      </div>
    );
  }
}

export default SignIn;
