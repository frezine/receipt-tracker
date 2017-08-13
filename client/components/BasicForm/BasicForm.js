import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const style = {
  color: "red"
}

class BasicForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={classnames("form-group")}>
        <label className="form-control-label">{this.props.label} {this.props.required ? <span style={style}>*</span> : ""}</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          type={this.props.type}
          name={this.props.name}
          className="form-control"
        />
      </div>
    );
  }
}

BasicForm.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BasicForm;
