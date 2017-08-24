import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "vrwhtpxg";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dndmsvrak/image/upload";

class ImageUploader extends Component{
  constructor(props){
    super(props);
    this.state = {
      uploadedFile: null,
      image_url: "",
      group_id: this.props.group_id
    }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });

        axios.post("/api/addReceipt", this.state)
        .then(
          (res) => {
            console.log('added receipt');
          }
        );
      }
    });
  }

  render() {
    return (
      <form>
        <div>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
          <p>{this.state.group_id}</p>
        </div>

        <div>
          {this.state.image_url === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.image_url}
              alt=""
            />
            <p>{this.state.image_url}</p>
          </div>}
        </div>
      </form>
    )
  }
}

export default ImageUploader;
