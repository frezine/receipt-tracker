import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const style = {
  color: "red"
}

class Form extends Component{
  render(){
    return (
      <div className={classnames("form-group", { "has-danger": this.props.error })}>
        <label className="form-control-label">{this.props.label} {this.props.required ? <span style={style}>*</span> : ""}</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          type={this.props.type}
          name={this.props.name}
          className="form-control"
        />
      {this.props.error && <span className="form-control-feedback">{this.props.error}</span>}
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Form;
