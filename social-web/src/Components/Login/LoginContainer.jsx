import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import { Login } from './Login'

class LoginContainer extends React.Component {
  render() {
    if (this.props.initialization) {
      if (this.props.isAuth) {
        return <Navigate to="/profile" />
      }
    }
    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  initialization: state.auth.initialization,
})

export default connect(mapStateToProps, { login })(LoginContainer)
