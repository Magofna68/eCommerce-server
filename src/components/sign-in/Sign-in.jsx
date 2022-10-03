import React, { Component, setState } from 'react'
import './sign-in.styles.scss';

export default class SignIn extends React.Component {
constructor(props) {
  super(props);
  this.State = {
    email: "",
    password: "",
    
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.target;
  console.log({email, password});
  // this.setState({email: ''}, {password: ''});
  this.setState({email: "", password: ""});
  console.log("form submitted", {email, password});
}

handleChange = (e) => {
  // e.preventDefault();
  const { value, name } = e.target;
  console.log({value, name});
  // dynamically set property value
  this.setState({[name]: value})
}

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input 
            name="email" 
            type="email" 
            id="email_input"
            // value={this.state.email}
            onChange={this.handleChange}
            required 
          />
          <label>Password</label>
          <input 
            name="password" 
            type="password" 
            password="password_input"
            // value={this.state.password} 
            onChange={this.handleChange}
            required 
          />
        
          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    )
  }
}
