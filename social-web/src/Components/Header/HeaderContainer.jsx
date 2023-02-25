import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getUserData, logout } from '../../redux/auth-reducer'

class HeaderContainerApi extends React.Component {
  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, {
  getUserData,
  logout,
})(HeaderContainerApi)
