import React, { Component } from "react";
import axios from "axios";
import SimpleForm from "../Forms/SimpleForm";
import DisplayCategorySideBar from "../UserSideBar/DisplayCategorySideBar"
import ImageUpload from "../Image/ImageUpload";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.location.state.user_id,
      group: "",
      group_id: "",
      new_receipt: false
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.setState({
      new_receipt: true
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      new_receipt: false
    });
    this.createGroup();
  }

  onChange(e){
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  createGroup() {
    axios.post("/api/groups", this.state)
    .then(
      (res) => {
        console.log("Added group: " + res);
        this.setState({group_id: res.data._id});
        console.log("this is the group_id" + this.state.group_id);
        this.associateGroup();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  associateGroup() {
    console.log("associating user with group");
    axios.post("/api/associateUserGroup", this.state)
    .then(
      (res) => {
        console.log('added group');
      }
    );
  }

  render() {
    return (
      <div>
        {/* <DisplayCategorySideBar
          user_id={this.state.user_id}
        /> */}
        <button
          onClick={this.onClick}>
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
