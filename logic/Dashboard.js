import React from 'react';
import { render } from "react-dom";
import Button from '../comp/Buttons';
import Input from '../comp/Textbox';
import Route from '../logic/Router';
require('../style.css');
import PropTypes from 'prop-types';
export default class Dashboard extends React.Component{

 constructor(props){
   super(props);
    this.state = {
      error: null,
      userName:null,
      passWord:null,
      response:null,
    };
   
 }

   routeComps = () => {
    alert("Calling");
    
  };

  validateUser=()=>{
    
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: this.state.userName,
        passWord:this.state.passWord })
    };
     fetch("http://localhost:8899/usercontroller/validate",requestOptions
     ).then(response => response.json())
        .then(data =>{this.setState({ response: data.response })
        alert("check "+this.state.response)} );
  }
  setUsername=(x)=>{ 
      this.setState({userName : x});
  }
  setpassword=(x)=>{ 
      this.setState({passWord : x});
  }
render (){
  return(
  <div>
    <h1>USAA Insurance </h1>
    <Input type="text" value="UserName" getCode={this.setUsername}></Input><br/>
    <Input type="password" value="Password" getCode={this.setpassword}></Input>
    <Button value="login" handleClick={this.validateUser} />
    <Button value="sign up" handleClick={this.props.stateFunction}/><br/>
     
  </div>
  );
}
}

 