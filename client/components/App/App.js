import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";

import SignUpPage from "../SignUp/SignUpPage";

class App extends Component{
  render(){
    return (
      <div>
        <NavigationBar />
        {/* <SignUpPage /> */}
      </div>
    );
  }
}

export default App;
