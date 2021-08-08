import React from 'react';
import { render } from 'react-dom';
import Button from '../comp/Buttons';
import Input from '../comp/Textbox';
import RadioButton from '../comp/RadioButton';
import Dropdown from '../comp/Dropdown';
import DataTable from '../comp/DataTable';
import Route from '../logic/Router';
require('../style.css');
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      patientName: null,
      passWord: null,
      response: null,
      firstName: null,
      gender: null,
      email: null,
      dob: null,
      appointmentDate: null,
      phoneNumber: null
    };
  }

  callRest = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.userName,
        passWord: this.state.passWord,
        firstName: this.state.firstName,
        gender: this.state.gender,
        email: this.state.email,
        dob: this.state.dob,
        AppointmentDate: this.state.appointmentDate,
        phoneNumber: this.state.phoneNumber
      })
    };

    fetch('http://localhost:4000/insertMenu/add', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ response: data.response });
        alert('check ' + this.state.response);
      });
  };

  setUsername = x => {
    this.setState({ userName: x });
  };
  setpassword = x => {
    this.setState({ passWord: x });
  };
  setFirstname = x => {
    this.setState({ firstName: x });
  };
  setGender = x => {
    this.setState({ gender: x });
  };
  setEmail = x => {
    this.setState({ email: x });
  };

  setDOB = x => {
    this.setState({ dob: x });
  };

  setAppointmentDate = x => {
    this.setState({ dob: x });
  };

  setPhoneNumber = x => {
    this.setState({ phoneNumber: x });
  };

  setPatientName = x => {
    this.setState({ patientName: x });
  };

  render() {
    return (
      <div>
        <h1>Patient Details</h1>
        <form id="">
          <Input type="text" value="PatientName" getCode={this.setFirstname} />
          <br />

          <RadioButton
            type="radio"
            value="Gender : Male"
            getCode={this.setGender}
          />
          <RadioButton type="radio" value="Female" getCode={this.setGender} />
          <br />
          <Input type="date" value="DOB" getCode={this.setDOB} />
          <br />
          <Input type="text" value="Age" getCode={this.setUsername} />
          <br />
          <Dropdown valueDropdown="Years" />
          <br />
          <Input type="date" value="Appointment Date" getCode={this.setDOB} />
          <br />
          <Input
            type="text"
            value="PhoneNumber"
            getCode={this.setPhoneNumber}
          />
          <br />

          <DataTable />

          <Button value="Register" handleClick={this.callRest} />

          <Link to="/dashboard">Login </Link>
        </form>
      </div>
    );
  }
}
