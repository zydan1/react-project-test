import React, { Component } from "react";
import Slider from "./Slider";
import axios from "axios";
let image = []
export default class PhotoUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
            ],
            
            
        }
    }
  
    handelChange = (e) => {
        e.preventDefault();
        let userDirection = this.props.userDirection;
    
        image[0] = e.target.files[0];
    }
    submit = (e) => {
    
        e.preventDefault();
        let userDirection = this.props.userDirection
        let formData = new FormData();
        formData.append("userDirection" ,userDirection)        
        formData.append('selectedFile', image[0]);
        axios.post('/getPhoto',formData )
            .then((result) => {
                
            }).catch(err => this.setState({ output: "Please Select a images " }))
            let state = this.state.images;
            let newState = { src: image[0], Ca: "wip" ,userDirection :userDirection }
            this.setState({
                images: this.state.images.concat([newState])
            })
    }
    render() {
        console.log(this.state);
        

        
        return (
            <div className="Photo_Uploader" style={{
                display: this.props.Display
            }}>
                <div className="photo" >

                    <form onSubmit={e => { this.submit(e) }} >
                        <label className="fileContainer">
                            Click to upload your photos
        <input onChange={(e) => { this.handelChange(e) }} name = "selectedFile"type="file" className="selectedFile" />
                        </label>
                        <input type="submit" className="button" value="upload" />
                    </form>
                </div>

            </div>

        )

    }

}