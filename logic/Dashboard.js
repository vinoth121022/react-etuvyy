import React from 'react';
import { render } from 'react-dom';
import Button from '../comp/Buttons';
import Input from '../comp/Textbox';
import Route from '../logic/Router';
import DataTable from '../comp/DataTable';
require('../style.css');
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      userName: null,
      passWord: null,
      response: null
    };
  }

  routeComps = () => {
    alert('Calling');
    <Route onClick={this.props.stateFunction} />;
  };

  validateUser = () => {
    console.log('here Iam ');

    <Redirect push to="/signupForm" />;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.userName,
        passWord: this.state.passWord
      })
    };
    fetch('http://localhost:8899/usercontroller/validate', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ response: data.response });
        alert('check ' + this.state.response);
      });
  };
  setUsername = x => {
    this.setState({ userName: x });
  };
  setpassword = x => {
    this.setState({ passWord: x });
  };
  render() {
    return (
      <div>
        <h1>USAA Insurance </h1>
        <Input type="text" value="UserName" getCode={this.setUsername} />
        <br />
        <Input type="password" value="Password" getCode={this.setpassword} />
        <Button value="login" handleClick={this.validateUser} />
        <DataTable />
        <Link to="/signupForm">Sign up </Link>
        <br />
        <Link to="/statedashboard">State Dashboard </Link>
      </div>
    );
  }
}
