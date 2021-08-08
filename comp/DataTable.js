import React from 'react';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userDtoList: [],
      response: null
    };
  }

  componentDidMount() {
    console.log('DataTable', DataTable);
    fetch('http://localhost:4000/getPatient')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            userDtoList: result.body,
            response: result.result
          });
        },
        error => {
          alert(this.state.response);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <fieldset>
        <table>
          <tr>
            <th>Name </th>
            <th>Gender </th>
            <th>Dob </th>
            <th>Phone </th>
            <th>Appointment Date </th>
            <th>Age </th>
          </tr>
          {this.state.userDtoList.map(item => (
            // Without the `key`, React will fire a key warning
            <React.Fragment key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.dob}</td>
                <td>{item.phone}</td>
                <td>{item.appointmentDate}</td>
                <td>{item.age}</td>
              </tr>
            </React.Fragment>
          ))}
        </table>
      </fieldset>
    );
  }
}
