import React, { Component } from "react";
import ImageUploader from "../Image/ImageUploader";
import axios from "axios";

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group_id: this.props.match.params._id,
      images: []
    }
  }

  componentWillMount(){
    axios.get("/api/groupNameById?_id=" + this.state.group_id)
    .then(
      (res) => {
        this.setState({
          images: res.data.receipts
        })
      },
      (err) => {
        console.log("error getting category name");
      }
    );
  }

  render() {
    console.log(this.state.images);
    return (
        <div>
          <p>{this.state.group_id}</p>
          <ImageUploader group_id={this.state.group_id}/>
          {
            this.state.images.map( (image, index) => {
              return <img src={image} alt="" key={index} />
            })
          }
        </div>
    )
  }
}

export default GroupPage;
