import axios from "axios";
import React, { Component } from "react";
import PropTypes from "prop-types";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.user_id,
      category_id_list: this.props.category_id_list,
      category_dict: {}
    }
  }

  //map the id with the categoryName and put it in a dictionary
  getGroupNames() {
    let dictionary = {}
    this.state.category_id_list.map(function(category_id_list, index){
      axios.get("/api/categoryNameById?_id=" + category_id_list)
      .then(
        (res) => {
          //console.log("this is the category id:" + category_id_list);
          dictionary[category_id_list] = res.data.category;
          //console.log(res.data.category);
          //this.props.category_dict[category_id_list].set( res.data.category);
        },
        (err) => {
          console.log("error getting category name");
        }
      )
    })
    this.setState({category_dict: dictionary});
  }

  getCategory() {
    axios.get("/api/allCategoriesReceiptUser?_id=" + this.state._id)
    .then(
      (res) => {
        if (res.data.categories !== 'undefined') {
          this.setState({category_id_list: res.data.categories});
        }
        this.getCategoryName();
      },
      (err) => {
        console.log("error response");
      }
    );
  }

  componentWillMount(){
    this.getGroupNames();
  }

  render() {
    console.log("hello2");
    return (
      <div>  HI  </div>
    )
  }
}

DisplayCategorySideBar.propTypes = {
  categoryID: PropTypes.string.isRequired,
  category_dict: PropTypes.object,
  category_id_list: PropTypes.array
};

export default DisplayCategorySideBar;

// {
//     Object.keys(vals).map((key, index) => (
//       <p key={index}> this is my key {key} and this is my value {vals[key]}</p>
//     ))
//   // You have an array
// }
