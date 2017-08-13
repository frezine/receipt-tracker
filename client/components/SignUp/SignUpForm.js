import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Form from "./Form";
import Validate from "../../../server/utils/Validate";

import axios from "axios";

class SignUpForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      submitted: false,
      success: false,
      _id: ""
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
      this.setState({ errors: {}, submitted: true, success: false });
      this.props.userSignUpRequest(this.state)
      .then(
        (res) => {
          this.setState({ success: true, submitted: false, _id: res.data._id});
          axios.post("/api/receiptUser", this.state);
        },
        (err) => {
          this.setState({ success: false, errors: err.response.data, submitted: false })
        }
      );
      //TODO: add this user to user request
      //this.props.makeReceiptRequest(usedID)

    }
  }

  render(){
    const { errors } = this.state;
    return (
      <div>
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
        { this.state.success && <Redirect push to="/signin" /> }
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default SignUpForm;
