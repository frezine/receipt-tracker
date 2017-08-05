import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignUpRequest } from "../../actions/SignUpActions";

class SignUpPage extends Component{
  render(){
    const { userSignUpRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm userSignUpRequest={userSignUpRequest} />
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignUpRequest })(SignUpPage);
