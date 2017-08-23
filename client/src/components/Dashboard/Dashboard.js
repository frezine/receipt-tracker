import React, { Component } from "react";
import axios from "axios";
import SimpleForm from "../Forms/SimpleForm";
import DisplayCategorySideBar from "../UserSideBar/DisplayCategorySideBar"
import ImageUpload from "../Image/ImageUpload";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      category: "",
      user_id: this.props.location.state.userid,
      category_id: "",
      make_new_receipt: 0,
      state_change:true
=======
      user_id: this.props.location.state.user_id,
      group: "",
      group_id: "",
      new_receipt: false
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

<<<<<<< HEAD
  clickNewReceipt() {
    this.setState({make_new_receipt: true});
  }

  setReceiptCategory(e){
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
=======
  onClick() {
    this.setState({
      new_receipt: true
    });
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
  }

  onSubmit(e){
    e.preventDefault();
<<<<<<< HEAD
    this.setState({make_new_receipt: false});
    console.log("chancing state");
    this.makeCategory();
=======
    this.setState({
      new_receipt: false
    });
    this.createGroup();
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
  }

  onChange(e){
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  createGroup() {
    axios.post("/api/groups", this.state)
    .then(
      (res) => {
<<<<<<< HEAD
        this.setState({category_id: res.data._id});
        this.associateCategory();
=======
        console.log("Added group: " + res);
        this.setState({group_id: res.data._id});
        console.log("this is the group_id" + this.state.group_id);
        this.associateGroup();
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
      },
      (err) => {
        console.log(err);
      }
    );
  }

<<<<<<< HEAD
  associateCategory() {
    axios.post("/api/receiptUserCategory", this.state)
=======
  associateGroup() {
    console.log("associating user with group");
    axios.post("/api/associateUserGroup", this.state)
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
    .then(
      (res) => {
        console.log('added group');
      }
    );
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <DisplayCategorySideBar
          categoryID={this.state.user_id}
          stateChange={this.state.state_change}
        />
        <button id='b1'
          style={{fontSize: 20, color: 'green'}}
          onClick={this.clickNewReceipt}>
=======
        {/* <DisplayCategorySideBar
          user_id={this.state.user_id}
        /> */}
        <button
          onClick={this.onClick}>
>>>>>>> 1923c57d39d090fc7855c209f140edc93c36cd52
          Get!
        </button>
        {this.state.new_receipt &&
          <form onSubmit={this.onSubmit}>
            <SimpleForm
              name="group"
              value={this.state.group_name}
              label="Group Name"
              required={true}
              type="text"
              onChange={this.onChange}
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
