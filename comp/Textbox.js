import React from "react";
import PropTypes from "prop-types";
require('../style.css');
export default class Button extends React.Component {

 constructor(props){
   super(props);
    this.state = {
      error: null,
      value:null
    };

 }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    const className = [
      "component-input",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <label value={}>{this.props.value} : </label>
        <input type="text"  onChange={this.handleChange}></input>
      </div>
    );
  }
}