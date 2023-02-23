import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Profile } from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'

class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setUserProfile(res.data)
      })
  }

  render() {
    if (!this.props.userProfile) return <div>Loading...</div>
    return <Profile {...this.props} userProfile={this.props.userProfile} />
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
})

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  ProfileContainerAPI
)
