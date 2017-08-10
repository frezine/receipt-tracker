import React, { Component } from "react";
import SignInForm from "./SignInForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignInRequest } from "../../actions/SignInActions";

class SignInPage extends Component{
  render(){
    const { userSignInRequest } = this.props;
    return (
      <div className="container">
        <SignInForm userSignInRequest={userSignInRequest}/>
      </div>
    );
  }
}

SignInPage.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignInRequest })(SignInPage);
