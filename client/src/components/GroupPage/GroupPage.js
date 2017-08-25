import React, { Component } from "react";
import ImageUploader from "../Image/ImageUploader";

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group_id: this.props.match.params._id
    }
  }

  render() {
    return (
        <div>
          <p>{this.state.group_id}</p>
          <ImageUploader group_id={this.state.group_id} />
        </div>
    )
  }
}

export default GroupPage;
