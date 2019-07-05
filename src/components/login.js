import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Dhila',
      password: ''
    }
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log(this.state)
    )
    console.log(event.target)
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <h1>LOGIN</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">
                Coconut
              </option>
              <option value="mango">Mango</option>
            </select>
          </fieldset>
          <button type="submit">
            <Link to="/dashboard">Login</Link>
          </button>
        </form>
      </div>
    )
  }
}

export default Login
