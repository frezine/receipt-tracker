import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import SignIn from "./SignIn";

class App extends Component{
  render(){
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}

export default App;
