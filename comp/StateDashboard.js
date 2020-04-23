import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';

export default class StateDashboard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
    <h1>Under Development</h1>
     <Link to="/dashboard">Home </Link>
    </div>
    )
    
  }
}