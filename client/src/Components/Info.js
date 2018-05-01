import React, { Component } from "react";
import "../App.css"
import axios from "axios";
import Slider from "./Slider"
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_Name: "",
            Description: "",
            Dir: "",
            Done: false,
            display: "block"
        }
    }
    Change = (e) => {
        if (e.target.name === "name") {
            this.setState({
                project_Name: e.target.value
            })
            e.target.value = '';


        } else if (e.target.name === "Description") {
            this.setState({
                Description: e.target.value
            })
            e.target.value = '';

        }
    }
    handel = (e) => {
        e.preventDefault();
        let { project_Name, Description } = this.state
        axios.post("/Info", { project_Name, Description })
            .then((res) => {
                var Direction = res.data;
                if (Direction !== "") {
                    this.setState({
                        Dir: Direction,
                        Done: true,
                        display: "none"
                    })
                }

                console.log(this.state);

            })

            .catch(err => console.log(err));
    }
    render() {
        let Direction = this.state.Dir
        return (
            <div className="Container">
                <div className="Info" style={{ display: this.state.display }} >
                    <div className="form_project">
                        <form className="_form" onSubmit={(e) => this.handel(e)}>

                            <label>project Name : </label><input name="name" value={this.state.project_Name} onChange={(e) => { this.Change(e) }} placeholder="Enter your project Name " type="text" className="project_Name" />
                            <br />
                            <br />
                            <label className="Description_label">Description  : </label>
                            <br />
                            <textarea name="Description" value={this.state.Description} onChange={(e) => { this.Change(e) }} type="text" className="Description" />
                            <input type="submit" value="start" className="submit" />

                        </form>
                    </div>

                </div>
                {this.state.Done == false ? true : <Slider Dir = {Direction} />}

            </div>
        )

    }
}