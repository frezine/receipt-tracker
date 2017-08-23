import axios from "axios";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group_id: this.props.group_id,
    }
  }

  render() {
    const categoryIdDict = this.state.category_dict;
    return (
        <div>
          {this.state.group_id}
          "In new group page rn"
        </div>
    )
  }
}

GroupPage.propTypes = {
  group_id: PropTypes.string.isRequired,
};

export default GroupPage;
