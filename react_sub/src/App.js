import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      user: "",
      phone:""
    }

    axios.get('http://localhost:8080/user')
    .then(response => response.data)
    .then((data) => {
      this.setState({ courses: data})
      console.log("state_courses :",this.state.courses)
    })

  }

  create_ = async () => {
    console.log("User :", this.state.user);
    console.log("Phone :", this.state.phone);

    axios.post('http://localhost:8080/create',{
      name: this.state.user,
      phone: this.state.phone
    })

    axios.get('http://localhost:8080/user')
    .then(response => response.data)
    .then((data) => {
      this.setState({ courses: data})
      console.log("state_courses :",this.state.courses)
    })
  }


  render(){
    return (
    <div className="App">
      <header className="App-header">
      <div>
        Name:
        <input type='text' onChange={
          (event) => {
            this.setState({user: event.target.value})
          }
        }/>

      </div>
      <div>
        phone:
        <input type='text' onChange={
          (event) => {
            this.setState({phone: event.target.value})
          }
        }/>
      </div>
      <div>
        <button onClick={this.create_}>CREATE</button>
      </div>
      <br/>


      <button onClick={this.createCourse}>createCourse</button>
      <button onClick={this.createPost}>createPost</button>
        <div>
          <ul>
            {this.state.courses.map(course =>(
              <li key={course.id}>
              Name: {course.name} | Phone: {course.phone}
              <button onClick>DELETE</button>
              </li>
            ))}
          </ul>
        </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

}



export default App;
