import React from 'react';
import { render } from "react-dom";
import Button from '../comp/Buttons';
import Input from '../comp/Textbox';
import Route from '../logic/Router';
require('../style.css');
export default class RegisterUser extends React.Component{

 constructor(props){
   super(props);
    this.state = {
      error: null,
      userName:null,
      passWord:null,
      response:null,
      firstName:null,
      lastName:null,
      email:null,
    };
 }

  callRest=()=>{
    
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: this.state.userName,
        passWord:this.state.passWord,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email})
    };
     fetch("http://localhost:8899/usercontroller/add",requestOptions
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
  setFirstname=(x)=>{ 
      this.setState({firstName : x});
  }
  setLastname=(x)=>{ 
      this.setState({lastName : x});
  }
  setEmail=(x)=>{ 
      this.setState({email : x});
  }

render (){
  return(
  <div>
    <h1>USAA Insurance Register Here...</h1>
    <Input type="text" value="FirstName" getCode={this.setFirstname}></Input><br/>
    <Input type="text" value="LastName" getCode={this.setLastname}></Input><br/>
    <Input type="text" value="Email" getCode={this.setEmail}></Input><br/>
    <Input type="text" value="UserName" getCode={this.setUsername}></Input><br/>
    <Input type="password" value="Password" getCode={this.setpassword}></Input>
    <Button value="Register" handleClick={this.callRest} />
    <Button value="Login"/>
  </div>
  );
}
}