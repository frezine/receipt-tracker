import React, { Component } from "react";
import axios from "axios";


class Receipts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
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
        Hello fake receipt
      </div>
    );
  }
}

export default Receipts;
//export default withRouter(Dashboard);
