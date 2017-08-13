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
    this.associate = this.associate.bind(this);
  }

  associate() {
    axios.post("/api/receiptUserReceipt", this.state)
    .then(
      (res) => { console.log('added receipt'); console.log(res); }
    );
  }

  getFunction() {
    axios.post("/api/receipts", this.state)
    .then(
      (res) => {
        this.setState({receipt_id: res.data._id});
        this.associate();
      }
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
