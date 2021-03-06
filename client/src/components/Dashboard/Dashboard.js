import React, { Component } from "react";
import axios from "axios";
import SimpleForm from "../Forms/SimpleForm";
import DisplayCategorySideBar from "../UserSideBar/DisplayCategorySideBar"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.location.state.user_id,
      group: "",
      group_id: "",
      new_receipt: false,
      category_id_list: [],
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.associateGroup = this.associateGroup.bind(this);
    //this.updateGroups = this.updateGroups.bind(this);
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
    var self = this;
    axios.post("/api/groups", this.state)
    .then(
      (res) => {
        self.setState({
          group_id: res.data._id
        });
        self.associateGroup();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  associateGroup() {
    axios.post("/api/associateUserGroup", this.state)
    .then(
      (res) => {
      }
    );
  }

  componentDidMount() {
    var self = this;
    axios.get("/api/acquireUserGroups?_id=" + this.state.user_id)
    .then(
      (res) => {
        self.setState({
          category_id_list: res.data.groups
        });
        self.render();
      },
      (err) => {
        console.log("error getting category name");
      }
    );
    this.setState({
      new_receipt: false
    });

  }

  render() {
    console.log("this dashboard is rerendering");
    if (this.state.category_id_list.length  === 0) {
      console.log("category_id_list not populated");
      return null;
    }
    else {
      console.log(this.state.category_id_list);
    }
    return (

      <div>
        <DisplayCategorySideBar
          category_id_list={this.state.category_id_list}
        />
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
