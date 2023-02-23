import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import axios from 'axios'
import { setUserData } from '../../redux/auth-reducer'

class HeaderContainerApi extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.setUserData(res.data.data)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, { setUserData })(
  HeaderContainerApi
)
