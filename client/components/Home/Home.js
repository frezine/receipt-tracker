import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Showcase, ShowcaseHeader, ShowcaseParagraph } from "./Home.style";

class Home extends Component{
  render(){
    return (
      <Showcase>
        <ShowcaseHeader>Landing Page</ShowcaseHeader>
        <ShowcaseParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis necessitatibus dicta voluptas, obcaecati maiores commodi.</ShowcaseParagraph>
        <Link to="/register" className="btn btn-danger">Register</Link>
      </Showcase>
    );
  }
}

export default Home;
