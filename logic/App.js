import React from 'react';
import { render } from "react-dom";
import Tabs from '../comp/Tabs';
import Button from '../comp/Buttons';
require('../style.css');
import PropTypes from "prop-types";

export default class App extends React.Component {
state = {
    random :null
  };
  
   getCode=()=>{ 
      this.setState({random : Math.floor((Math.random() * 10000000) + 1)});
  }
  
render () {
  return (
    <div>
      <em><h1>Literature</h1></em>
     <Tabs>
      <div  label="Create Room" id="create_Room">
         <Button name="Generate Code" clickHandler={this.getCode}></Button><br/>
          --<em>{this.state.random}</em>--
      </div>
      <div label="Join Room">
        After 'while, <em>Crocodile</em>!
      </div>
    </Tabs>
    </div>
  );}
}


 


