import React, { Component } from 'react';
import { render } from 'react-dom';

import Tabs from './Tabs';
require('./style.css');

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Literature'
    };
  }

  render() {
    return (
      <div>
       <Tabs>
      <div label="Gator">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Croc">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Tabs>
         <Tabs name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
