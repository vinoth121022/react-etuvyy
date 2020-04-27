import React from 'react';
import DropDown from "../comp/DropDown";
import Textbox from "../comp/Textbox";
import DataTable from "../comp/DataTable";
import Dashboard from "../logic/Dashboard";
export default class Premimum extends React.Component{
  constructor(props){
    super(props);
    this.state={
      stateList:[],
      userList:[],
      cityList:[],
      isIOTenabled:false,
      response:null
    }
  }

   componentDidMount() { 
    fetch("http://localhost:8899/usercontroller/getAllState")
      .then(res => res.json())
      .then(
        (result) => {
         // alert(result.response);
          this.setState({
            isIOTenabled: true,
            stateList: result.stateDtoList,
            response:result.response
          });
        },
        (error) => {
          alert(this.state.response);
          this.setState({
            isIOTenabled: true,
            error
          });
        }
      )
  }

  render()
  {
    return(
      <div >
      <h1>USSA-Renters</h1>
      <h2>Choose your Premimum Here </h2>
      
      <DropDown valueForList={this.state.stateList} label="State "/>
     
       <DropDown valueForList={this.state.stateList} label="City "/>
       <Textbox value="Policy Number" />
        <Textbox value="Policy Holder Name "/><br/>
        <DataTable/>
       </div>
    )
  }

}