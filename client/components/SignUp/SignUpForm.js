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
      loading: false
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
      this.setState({ errors: {}, loading: true });
      this.props.userSignUpRequest(this.state).then(
        () => {},
        (err) => this.setState({ errors: err.response.data, loading: false })
      );
    }
  }

  render(){
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Please fill the required fields.</h1>
        <Form
          name="username"
          value={this.state.username}
          label="Username"
          error={errors.username}
          type="text"
          onChange={this.onChange}
        />
        <Form
          name="password"
          value={this.state.password}
          label="Password"
          error={errors.password}
          type="password"
          onChange={this.onChange}
        />
        <div className="form-group">
          <button disabled={this.state.loading} className="btn btn-primary btn-lg">Submit</button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;
