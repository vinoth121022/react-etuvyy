import React from 'react';
import { render } from "react-dom";

import Tabs from '../comp/Tabs';
import Button from '../comp/Buttons';
import TButton from '../comp/TButton';
import App from '../logic/App';
import Dash from '../logic/Dashboard';
import MyForm from '../comp/Form';
import Register from '../comp/SignupForm';
require('../style.css');

export default class Route extends React.Component{

  constructor(props){
   super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
 }

handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
render (){
  const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Register handleClick={this.handleLogoutClick} />;
    } else {
      button = <Dash handleClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  
}
  
}
