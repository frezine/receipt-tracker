import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.location.state.userid
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        in dashboard
      </div>
    );
  }
}

export default Dashboard;
//export default withRouter(Dashboard);
