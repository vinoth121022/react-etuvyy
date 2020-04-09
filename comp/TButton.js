import React from 'react';
import { render } from "react-dom";
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      myGuestDtoList: [],
      response:null
    };
  }

  componentDidMount() {
    
    console.log("here1hbb");
    fetch("http://localhost:8899/myguestscontroller/getAll")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("here");
          this.setState({
            isLoaded: true,
            myGuestDtoList: result.myGuestDtoList,
            response:result.result
          });
        },
        
        (error) => {
          //  alert(this.state.response);
          this.setState({
            isLoaded: true,
            error:"API CALL FAILED"
          });
        }
      )
  }

  render() {
    const { error, isLoaded, myGuestDtoList,response } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {myGuestDtoList.map(item => (
            <li key={item.firstName}>
              {item.firstName} {item.email}
            </li>
          ))}
        </ul>
      );
    }
  }
}