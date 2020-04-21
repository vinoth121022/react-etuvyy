import React from "react";
import { render } from "react-dom";
import Dashboard from "../logic/Dashboard";
import Register from "../comp/SignupForm";

export default class Route extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
 
  stateFunction=(props)=>{
    console.log("HAI");
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Register />;
    } else {
      button = <Dashboard  />;
    }
    return (
      <div>
        {button}
        <button onClick={this.stateFunction} >Navigate</button>
      </div>
    );
  }
}
