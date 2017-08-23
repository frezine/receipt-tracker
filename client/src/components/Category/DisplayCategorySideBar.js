import axios from "axios";
import React, { Component } from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.categoryID,
      stateChange: this.props.stateChange,
      category_id_list: [],
      category_dict: {},
      redirect: false,
      redirect_id: ""
    }
    this.getCategory = this.getCategory.bind(this);
    this.getCategoryName = this.getCategoryName.bind(this);
    this.redirectGroupPage = this.redirectGroupPage.bind(this);
  }

  componentWillMount() {
    console.log("before component will mount");
    this.getCategory();
 }


  //map the id with the categoryName and put it in a dictionary
  getCategoryName() {
    console.log("in get category name");
    var dictionary = {}
    this.state.category_id_list.map(function(category_id_list, index){
      axios.get("/api/categoryNameById?_id=" + category_id_list)
      .then(
        (res) => {
          dictionary[category_id_list] = res.data.category;
        },
        (err) => {
          console.log("error getting category name");
        }
      )
    })
    this.setState({category_dict: dictionary});
    console.log("after getting the dict of id and name");
    console.log(this.state.category_dict);
  }

  getCategory() {
    axios.get("/api/allCategoriesReceiptUser?_id=" + this.state._id)
    .then(
      (res) => {
          this.setState({category_id_list: res.data.categories});
          console.log("after setting state for user id and its groups")
          this.getCategoryName();
      },
      (err) => {
        console.log("error response");
      }
    );
  }

  redirectGroupPage(key) {
    console.log("inside redirect gorup page");
    console.log(key);
    this.setState({redirect: true});
    this.setState({redirect_id: key});
    console.log(this.state.redirect_id);
  }

  render() {
    const categoryIdDict = this.state.category_dict;
    return (
        <div>
          {
            Object.keys(categoryIdDict).map((key, index) => (
              <button onClick={() => this.redirectGroupPage(key)}
                      class="btn btn-primary"
                      key={index}>
                {categoryIdDict[key]}
              </button>
            ))
          }
          { this.state.redirect &&
            <Redirect to={{
              pathname: "/group_page",
              state: {group_id: this.state.redirect_id}
            }}/>
          }
        </div>
    )
  }
}

DisplayCategorySideBar.propTypes = {
  //categoryid is suppose to be user id
  categoryID: PropTypes.string.isRequired,
  stateChange: PropTypes.string.isRequired
};

export default DisplayCategorySideBar;
