import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "vrwhtpxg";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dndmsvrak/image/upload";

class ImageUploader extends Component{
  constructor(props){
    super(props);
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ""
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
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
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
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt=""
            />
            <p>{this.state.uploadedFileCloudinaryUrl}</p>
          </div>}
        </div>
      </form>
    )
  }
}

export default ImageUploader;
