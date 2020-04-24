import React from "react";

export default class DropDown extends React.Component{

  constructor(props){
    super(props);
     this.state = {
      error: null,
      response:null,value:null
    };
  }

  handleChange=()=>{
    alert("selected Value "+this.state.value);
  }
  render(){
    return(
      <div>
        <label>
          {this.props.label}
          <select value={this.state.value} onChange={this.handleChange}>
             {this.props.list.map(item => (
                <React.Fragment key={item.id}>
                  <option>{item.value}</option>
                </React.Fragment>  ))}
          </select>
        </label>
    </div>)
  }
}