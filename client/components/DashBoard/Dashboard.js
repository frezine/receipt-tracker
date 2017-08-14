import React, { Component } from "react";
import axios from "axios";
import BasicForm from "../BasicForm/BasicForm";
import DisplayCategorySideBar from "../Category/DisplayCategorySideBar"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      user_id: this.props.location.state.userid,
      category_id: "",
      make_new_receipt: false,
      stateChanged: true
    }
    this.clickNewReceipt = this.clickNewReceipt.bind(this);
    this.setReceiptCategory = this.setReceiptCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.makeCategory = this.makeCategory.bind(this);
    this.associateCategory = this.associateCategory.bind(this);
  }

  clickNewReceipt() {
    this.setState({make_new_receipt: true})
  }

  setReceiptCategory(e){
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({make_new_receipt: false})
    this.makeCategory();
  }

  makeCategory() {
    axios.post("/api/category", this.state)
    .then(
      (res) => {
        console.log("Added category: " + res);
        this.setState({category_id: res.data._id});
        console.log("this is the category_id" + this.state.category_id);
        this.associateCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  associateCategory() {
    console.log("associating user with cateogy");
    axios.post("/api/receiptUserCategory", this.state)
    .then(
      (res) => {
        console.log('added category');
      }
    );
  }

  render() {
    return (
      <div>
        <DisplayCategorySideBar
          categoryID={this.state.user_id}
          stateChanged={this.state.stateChanged}
        />
        <button id='b1'
          style={{fontSize: 20, color: 'green'}}
          onClick={this.clickNewReceipt}>
          Get!
        </button>
        <p>
          {this.state.category_id}
        </p>

        {this.state.make_new_receipt &&
          <form onSubmit={this.onSubmit}>
            < BasicForm
              name="category"
              value={this.state.category}
              label="Category"
              required={true}
              type="text"
              onChange={this.setReceiptCategory}
            />
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Submit</button>
            </div>
          </form>
        }
      </div>
    );
  }
}

export default Dashboard;
//export default withRouter(Dashboard);
