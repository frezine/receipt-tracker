import axios from "axios";
import React, { Component } from "react";
<<<<<<< HEAD:client/src/components/Category/DisplayCategorySideBar.js
import { Link, Route, Redirect, Switch } from "react-router-dom";
=======
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52:client/src/components/UserSideBar/DisplayCategorySideBar.js
import PropTypes from "prop-types";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD:client/src/components/Category/DisplayCategorySideBar.js
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
=======
      _id: this.props.user_id,
      category_id_list: this.props.category_id_list,
      category_dict: {}
    }
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52:client/src/components/UserSideBar/DisplayCategorySideBar.js
  }

  componentWillMount() {
    console.log("before component will mount");
    this.getCategory();
 }


  //map the id with the categoryName and put it in a dictionary
<<<<<<< HEAD:client/src/components/Category/DisplayCategorySideBar.js
  getCategoryName() {
    console.log("in get category name");
    var dictionary = {}
=======
  getGroupNames() {
    let dictionary = {}
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52:client/src/components/UserSideBar/DisplayCategorySideBar.js
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

<<<<<<< HEAD:client/src/components/Category/DisplayCategorySideBar.js
  redirectGroupPage(key) {
    console.log("inside redirect gorup page");
    console.log(key);
    this.setState({redirect: true});
    this.setState({redirect_id: key});
    console.log(this.state.redirect_id);
  }

  render() {
    const categoryIdDict = this.state.category_dict;
=======
  componentWillMount(){
    this.getGroupNames();
  }

  render() {
    console.log("hello2");
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52:client/src/components/UserSideBar/DisplayCategorySideBar.js
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
<<<<<<< HEAD:client/src/components/Category/DisplayCategorySideBar.js
  stateChange: PropTypes.string.isRequired
=======
  category_dict: PropTypes.object,
  category_id_list: PropTypes.array
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52:client/src/components/UserSideBar/DisplayCategorySideBar.js
};

export default DisplayCategorySideBar;
