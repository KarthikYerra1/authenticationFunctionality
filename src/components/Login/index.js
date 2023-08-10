import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const userDetails = {
  username: 'rahul',
  password: 'rahul@2021',
}

class Login extends Component {
  state = {loginDetails: userDetails}

  successLogin = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 2})
    history.replace('/')
  }

  loginClicked = async () => {
    const {loginDetails} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successLogin(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1>Please login</h1>
        <button type="button" onClick={this.loginClicked}>
          Login with sample creds
        </button>
      </div>
    )
  }
}

export default Login
