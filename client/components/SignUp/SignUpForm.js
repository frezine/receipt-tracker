import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import Validate from "../../../server/utils/Validate";

class SignUpForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      submitted: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
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
      this.setState({ errors: {}, submitted: true });
      this.props.userSignUpRequest(this.state)
      .then(
        (res) => { this.setState({ submitted: false }) },
        (err) => {this.setState({ errors: err.response.data, submitted: false })}
      );
    }
  }

  render(){
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Please fill in the required fields</h2>
        <Form
          name="username"
          value={this.state.username}
          label="Username"
          required={true}
          error={errors.username}
          type="text"
          onChange={this.onChange}
        />
        <Form
          name="password"
          value={this.state.password}
          label="Password"
          required={true}
          error={errors.password}
          type="password"
          onChange={this.onChange}
        />
        <div className="form-group">
          <button disabled={this.state.submitted} className="btn btn-primary btn-lg">Submit</button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;
