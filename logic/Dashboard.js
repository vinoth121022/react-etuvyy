import React from 'react';
import { render } from "react-dom";
import Button from '../comp/Buttons';
import Input from '../comp/Textbox';
require('../style.css');
export default class Dashboard extends React.Component{

getValue(i){

}

render (){
  return(
  <div>
    <h1>USAA Insurance</h1>
    <Input value="UserName" ></Input><br/>
    <Input value="Password" ></Input>
    <Button value="login"/>
    <Button value="sign up"/>
  </div>
  );
}
}