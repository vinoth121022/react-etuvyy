import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import DataTable from'../comp/DataTable';
export default class StateDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      myGuestDtoList: [],
      response:null
    };
  }
  render(){
    return(
      <div>
    <h1>Added Users</h1>
      <DataTable/>
     <Link to="/dashboard">Home </Link>
    </div>
    )
    
  }
}