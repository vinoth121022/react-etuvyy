import React from "react";

export default class DropDown extends React.Component{

  constructor(props){
    super(props);
     this.state = {
      error: null,
      response:null,
      value:null,
      selectValue:null
    };
  }

  handleChange=(event)=>{
    this.setState({selectValue:event.target.value});
   // alert("selected Value "+this.state.selectValue);
  }
  render(){
    return(
      <div>
        <label value={this.props.label}>
          {this.props.label}
          <select value={this.state.selectValue} onChange={this.handleChange}>
             {
               this.props.valueForList.map(item => (
                <React.Fragment key={item.id}>
                  <option value={item.id}>{item.name}</option>
                </React.Fragment> 
                 ))
                }
          </select>
        </label>
    </div>)
  }
}