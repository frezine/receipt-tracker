import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.location.state.userid
    }
    this.Getfunction = this.Getfunction.bind(this);
  }

  Getfunction() {
    console.log("present button: this is the id");
    console.log(this.state.userid);
  }

  render() {
    return (
      <div>
        <button id='b1'
          style={{fontSize: 20, color: 'green'}}
          onClick={() => this.Getfunction()}>
          Get!
        </button>
      </div>
    );
  }
}

export default Dashboard;
//export default withRouter(Dashboard);
