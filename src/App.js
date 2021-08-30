import React, { Component } from 'react';
import "./App.css";

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
// const validatePassword = RegExp(/^[A-Za-z]\w{7,14}$/);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      candidateName: '', 
      candidateEmail: '', 
      candidateRole: 'mern',
      candidateGender: '', 
      candidateTerms: true, 
      errors: {
        candidateName: '',
        candidateEmail: '',
        candidateRole: '',
        candidateGender: '',
        candidateTerms: ''
      }
    };
  }

  // event.target.name
  // event.target.value
  // event.target.checked
  // { target: { name, value, checked } }
  handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'candidateTerms') {
      value = checked;
    }

    const errors = { ...this.state.errors };

    // name - candidateName, value - r
    // name - candidateEmail, value - s
    switch (name) {
      case 'candidateName': {
        if (!value) {
          errors.candidateName = 'Name is required';
        } else {
          errors.candidateName = '';
        }
        break;
      }
      case 'candidateEmail': {
        if (!value) {
          errors.candidateEmail = 'Email is required';
        } else if (!validateEmail.test(value)) {
          errors.candidateEmail = 'Email is invalid';
        } else {
          errors.candidateEmail = '';
        }
        break;
      }
      case 'candidateRole': {
        if (!value) {
          errors.candidateRole = 'Role is required';
        } else {
          errors.candidateRole = '';
        }
        break;
      }
      case 'candidateGender': {
        if (!value) {
          errors.candidateGender = 'Gender is required';
        } else {
          errors.candidateGender = '';
        }
        break;
      }
      case 'candidateTerms': {
        if (!value) {
          errors.candidateTerms = 'Terms is required';
        } else {
          errors.candidateTerms = '';
        }
        break;
      }
    }

    console.log(name, value);

    this.setState({ [name]: value, errors });
    // candidateName e
    // this.setState({ candidateName: "e" })
    // candidateEmail t
    // this.setState({ candidateEmail: "t" })
  };

  validation = () => {
    const {
      candidateName,
      candidateEmail,
      candidateRole,
      candidateGender,
      candidateTerms
    } = this.state;
    if (
      candidateName &&
      candidateEmail &&
      candidateRole &&
      candidateGender &&
      candidateTerms
    ) {
      if (validateEmail.test(candidateEmail)) {
        return true;
      }
    }

    return false;
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validation()) {
      console.log(this.state);
      // API
    }
  };

  render() {
    return (
      <div>
        <div className="header">
        <h1>Job Application</h1>
        </div>
        <form className="myForm" onSubmit={this.handleSubmit}>
          <div>
            <label>Candidate Name :</label>
            <input
              name="candidateName"
              type="text"
              value={this.state.candidateName}
              onChange={this.handleChange}
              required
            />
            {this.state.errors.candidateName ? (
              <p>{this.state.errors.candidateName}</p>
            ) : (
              ''
            )}
          </div>
          <br />
          <div>
            <label>Candidate Email :</label>
            <input
              name="candidateEmail"
              type="email"
              value={this.state.candidateEmail}
              onChange={this.handleChange}
              required
            />
            {this.state.errors.candidateEmail ? (
              <p>{this.state.errors.candidateEmail}</p>
            ) : (
              ''
            )}
          </div>
          <br />
          <div>
            <label>Role Applied For :</label>
            <select
              name="candidateRole"
              value={this.state.candidateRole}
              onChange={this.handleChange}
              required
            >
              <option value="react">React Developer</option>
              <option value="node">NodeJS Developer</option>
              <option value="mern">MERN Developer</option>
            </select>
            {this.state.errors.candidateRole ? (
              <p>{this.state.errors.candidateRole}</p>
            ) : (
              ''
            )}
          </div>
          <br />
          <div>
            <label>Gender :</label>
            <input
              name="candidateGender"
              type="radio"
              value="male"
              onChange={this.handleChange}
            />{' '}
            Male
            <input
              name="candidateGender"
              type="radio"
              value="female"
              onChange={this.handleChange}
            />{' '}
            Female
            <input
              name="candidateGender"
              type="radio"
              value="other"
              onChange={this.handleChange}
            />{' '}
            Other
          </div>
          {this.state.errors.candidateGender ? (
            <p>{this.state.errors.candidateGender}</p>
          ) : (
            ''
          )}
          <br />
          <div>
            <input
              name="candidateTerms"
              type="checkbox"
              checked={this.state.candidateTerms}
              onChange={this.handleChange}
              required
            />
            <label>Please accept terms and conditions</label>
            {this.state.errors.candidateTerms ? (
              <p>{this.state.errors.candidateTerms}</p>
            ) : (
              ''
            )}
          </div>
          <br />
          <div >
            <input type="submit" className="submitButton" />
          </div>
          <br />
        </form>
      </div>
    );
  }
}