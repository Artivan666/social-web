import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { Login } from './Login'

class LoginContainer extends React.Component {
  // refactor !!!!!!
  render() {
    if (this.props.isAuth) {
      return <Navigate to="/profile" />
    }

    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(LoginContainer)
