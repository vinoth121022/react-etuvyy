import React from 'react';
import ReactDOM from 'react-dom';
require('../style.css');
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your password:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}