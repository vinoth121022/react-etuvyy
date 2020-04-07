import React from "react";
import PropTypes from "prop-types";
require('../style.css');
export default class Button extends React.Component {

 constructor(props){
   super(props);

 }

  onChange = () => {
    this.props.onChange(this.props.name);
  };

  render() {
    const className = [
      "component-input",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <label value={}>{this.props.value} : </label>
        <input type="text" inputProps={{ 'aria-label': 'description' }}  onChange={this.handleChange}></input>
      </div>
    );
  }
}