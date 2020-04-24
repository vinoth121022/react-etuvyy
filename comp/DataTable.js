import React from "react";

export default class DataTable extends React.Component{

 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userDtoList: [],
      response:null
    };
  }

  componentDidMount() { 
    fetch("http://localhost:8899/usercontroller/getAll")
      .then(res => res.json())
      .then(
        (result) => {
         // alert(result.response);
          this.setState({
            isLoaded: true,
            userDtoList: result.userDtoList,
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
   
  render(){  
    return( 
        <fieldset>
      <table>
      
      <tr>
          <th>FirstName </th>
          <th>LastName </th>
          <th>Email </th>
          </tr>
      {this.state.userDtoList.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
        <tr>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          </tr>
        </React.Fragment>
      ))}
    </table>
    </fieldset>
    );
  }
}