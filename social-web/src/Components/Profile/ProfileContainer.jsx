import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (userId == undefined) {
      userId = 25328
    }
    console.log(`componentDidMount userId: ${userId}`)
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      let userId = this.props.router.params.userId
      if (userId == undefined) {
        userId = 25328
      }
      console.log(`componentDidUpdate userId: ${userId}`)
      this.props.getUserProfile(userId)
    }
  }

  render() {
    console.log('render profile')
    if (this.props.initialization) {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />
      }
    }

    if (!this.props.userProfile) return <div>Loading...</div>
    return (
      <Profile
        {...this.props}
        userProfile={this.props.userProfile}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps profile')
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
    initialization: state.auth.initialization,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.id,
  }
}

export const ProfileContainer = connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
})(withRouter(ProfileContainerAPI))
