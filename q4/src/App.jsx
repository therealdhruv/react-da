import './App.css'

import React, { Component } from 'react';

class Employee extends Component {
  state = {
    name: 'Dhruv Pankaj Patel',
    age: 27,
    position: 'Frontend Developer'
  };

  render() {
    const { name, age, position } = this.state;
    const isValidAge = age > 25;

    return (
      <div style={{ color: isValidAge ? 'magenta' : 'red' }}>
        <h2 className="employee-name" style={{ textDecoration: 'underline' }}>
          Employee Details
        </h2>
        {isValidAge ? (
          <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Position: {position}</p>
          </div>
        ) : (
          <p className="invalid-data">Invalid Data</p>
        )}
      </div>
    );
  }
}

export default Employee;

