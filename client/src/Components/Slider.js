import React , { Component } from "react";
import UploadIcon from "react-icons/lib/fa/arrow-circle-o-up"
import PhotoUploader from "./PhotoUploader";
import Info from "./Info"


export default class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
         DisplayUploader : "none"   
         ,
         Dir : this.props.Dir
        }    
        }    
        
        handel = (e)=>{
        let Toggle = this.state.DisplayUploader;
        if(Toggle == "none"){
            this.setState({
                DisplayUploader : "block",   
               })
        }else{
            this.setState({
                DisplayUploader : "none",   
               });
        
        }
        
        }
            render() {
                let Dir = this.state.Dir
                return (
                    <div className = "container-left">
                    <div className="Slider">
        
        <span onClick = {(e)=>{this.handel(e)}}><UploadIcon className = "Upload-icon"/></span>
                    </div>
        <PhotoUploader Display = {this.state.DisplayUploader} userDirection = {Dir}/>
                    </div>
                )
        
            }
        }