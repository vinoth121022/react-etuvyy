import React from "react";

export default class DataTable extends React.Component{

  constructor(props){
    super(props);
  }
   buildTable() {
  var table = document.getElementById("dataTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
  render(){
    return(
      <table id="dataTable" ></table>
    );
  }
}