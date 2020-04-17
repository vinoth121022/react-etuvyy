import React from "react";
import { render } from "react-dom";

import Tabs from "../comp/Tabs";
import Button from "../comp/Buttons";
import TButton from "../comp/TButton";
import App from "../logic/App";
import Dashboard from "../logic/Dashboard";
import MyForm from "../comp/Form";
import Register from "../comp/SignupForm";
require("../style.css");
import PropTypes from 'prop-types';

export default class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
 
  stateFunction=()=>{
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
