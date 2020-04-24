import React from 'react';

export default class Premimum extends React,Component{
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
            isLoaded: true,
            stateList: result.stateDtoList,
            response:result.result
          });
        },
        (error) => {
          alert(this.state.response);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


}