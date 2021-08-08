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
      response: null,
      gender: null,
      dob: null,
      appointmentDate: null,
      phoneNumber: null,
      age: null
    };
  }

  callRest = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientName: this.state.patientName,
        gender: this.state.gender,
        dob: this.state.dob,
        appointmentDate: this.state.appointmentDate,
        phoneNumber: this.state.phoneNumber,
        age: this.state.age
      })
    };

    console.log('requestOptions', requestOptions);

    fetch('http://localhost:4000/insertPatient', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('requestOptions', requestOptions);
        this.setState({ response: data.response });
        alert('check ' + this.state.response);
      });
  };

  setGender = x => {
    this.setState({ gender: x });
  };

  setDOB = x => {
    this.setState({ dob: x });
  };

  setAppointmentDate = x => {
    this.setState({ appointmentDate: x });
  };

  setPhoneNumber = x => {
    this.setState({ phoneNumber: x });
  };

  setPatientName = x => {
    this.setState({ patientName: x });
  };

  setAge = x => {
    this.setState({ age: x });
  };

  render() {
    return (
      <div>
        <h1>Patient Details</h1>

        <Input type="text" value="PatientName" getCode={this.setPatientName} />
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
        <Input type="text" value="Age" getCode={this.setAge} />
        <br />
        <Dropdown valueDropdown="Years" />
        <br />
        <Input
          type="date"
          value="Appointment Date"
          getCode={this.setAppointmentDate}
        />
        <br />
        <Input type="text" value="PhoneNumber" getCode={this.setPhoneNumber} />
        <br />
        <Button value="Register" handleClick={this.callRest} />

        <Link to="/dashboard">Login </Link>

        <DataTable />
      </div>
    );
  }
}
