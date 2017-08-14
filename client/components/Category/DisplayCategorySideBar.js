import axios from "axios";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.categoryID,
      category_id_list: []
    }
    this.getCategory = this.getCategory.bind(this);
  }


  getCategory() {
    console.log(this.state);
    axios.get("/api/allCategoriesReceiptUser?_id=" + this.state._id)
    .then(
      (res) => {
        console.log("this is the response")
        this.setState({category_id_list: res.data.categories})
        console.log(this.state.category_id_list);
      },
      (err) => {
        console.log("error response");
      }
    );
  }

  render() {
    if(this.props.stateChanged) {
      this.getCategory();
    }


      return (
         <ul>
             {this.state.category_id_list.map(function(category, index){
                 return <li key={category}>{category}</li>;
               })}
         </ul>
      )
      this.props.stateChange = false;
    }
}

DisplayCategorySideBar.propTypes = {
  categoryID: PropTypes.string.isRequired,
  stateChanged: PropTypes.bool.isRequired
};

export default DisplayCategorySideBar;
