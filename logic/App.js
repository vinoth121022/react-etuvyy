import React from 'react';
import { render } from "react-dom";

import Tabs from '../comp/Tabs';
import Button from '../comp/Buttons';
require('../styles.css');


export default class App extends React.Component {

state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

render () {
  return (
    <div>
      <h1>Literature</h1>
     <Tabs>
      <div  label="Create Room" id="create_Room">
         <Button name="Generate Code"  onClick={this.handleClick} />
      </div>
      <div label="Join Room">
        After 'while, <em>Crocodile</em>!
      </div>
    </Tabs>
    </div>
  );}
}


 


