import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
class App extends Component {
  render() {
    return (
      <div className="App">
<Navbar/>
<Info/>
      </div>
    );
  }
}

export default App;
