import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class Form extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={classnames("form-group", { "has-danger": this.props.error })}>
        <label className="form-control-label">{this.props.label}</label>
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
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
