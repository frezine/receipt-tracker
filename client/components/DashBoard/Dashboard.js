import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fake: "fake data",
      user_id: this.props.location.state.userid,
      receipt_id: ""
    }
    this.getFunction = this.getFunction.bind(this);
  }

  getFunction() {
    console.log("present button: this is the id");
    console.log(this.state.user_id);
    axios.post("/api/receipts", this.state)
    .then(
      (res) => { console.log(res); this.setState({receipt_id: res.data._id}) }

    );
  }

  render() {
    return (
      <div>
        <button id='b1'
          style={{fontSize: 20, color: 'green'}}
          onClick={this.getFunction}>
          Get!
        </button>
        <p>
          {this.state.receipt_id}
        </p>
      </div>
    );
  }
}

export default Dashboard;
//export default withRouter(Dashboard);
