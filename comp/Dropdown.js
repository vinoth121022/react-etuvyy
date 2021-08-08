import React from "react";
import PropTypes from "prop-types";
require('../style.css');
export default class Dropdown extends React.Component {

 constructor(props){
   super(props);
    this.state = {
      error: null,
      value:null
    };

 }

  handleChange = (event) => {
    this.props.getCode(event.target.value);
  };

  render() {
    const className = [
      "component-input", 
    ];

    return (
      <div className={className.join(" ").trim()}>
        <label value={}>{this.props.value}  </label>
           <select id="iterate" name="" >
          <option value={this.props.valueDropdown}>{this.props.valueDropdown}</option>
          </select>
      </div>
    );
  }
}