import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";

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
