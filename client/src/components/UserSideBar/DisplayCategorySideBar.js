import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.user_id,
      category_id_list: [],
      category_dict: {},
      redirect: false,
      redirect_id: ""
    }
  }

  componentWillMount() {
    this.getCategory();
  }

  getCategoryName() {
    let dictionary = {};

    for (let i = 0; i < this.state.category_id_list.length; i++){
      axios.get("/api/groupNameById?_id=" + this.state.category_id_list[i])
      .then(
        (res) => {
          dictionary[this.state.category_id_list[i]] = res.data.group;
        },
        (err) => {
          console.log("error getting category name");
        }
      )
    }

    this.setState({
      category_dict: dictionary
    });
    console.log("after getting the dict of id and name");
    console.log(this.state.category_dict);
  }

  getCategory() {
    axios.get("/api/acquireUserGroups?_id=" + this.state._id)
    .then(
      (res) => {
        this.setState({
          category_id_list: res.data.groups
        });
        this.getCategoryName();
      },
      (err) => {
        console.log("error response");
      }
    );
  }

  redirectGroupPage(key) {
    this.setState({
      redirect_id: key,
      redirect: true
    });
  }

  render() {
    const categoryIdDict = this.state.category_dict;
    return (
        <div>
          {
            Object.keys(categoryIdDict).map((key, index) => (
              <button onClick={() => this.redirectGroupPage(key)}
                      className="btn btn-primary"
                      key={index}>
                {categoryIdDict[key]}
              </button>
            ))
          }

          {this.state.redirect &&
            <Redirect to={"group_page/" + this.state.redirect_id} />
          }
        </div>
    )
  }
}

DisplayCategorySideBar.propTypes = {
  user_id: PropTypes.string.isRequired
};

export default DisplayCategorySideBar;
