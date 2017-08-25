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
      group_id: this.props.group_id,
      images: []
    }
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount(){
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
        let images = this.state.images.slice();
        images.push(response.body.secure_url);

        this.setState({
          image_url: response.body.secure_url,
          images: images
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
          {
            this.state.images.map( (image, index) => {
              return <img src={image} alt="" key={index} />
            })
          }
        </div>
      </form>
    )
  }
}

export default ImageUploader;
