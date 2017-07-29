import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";

class App extends Component{
  render(){
    return (
      <div>
        <NavigationBar />
        <Home />
      </div>
    );
  }
}

export default App;
