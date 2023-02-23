import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Profile } from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

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
      userId = 2
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      console.log('componentDidUpdate')
      const userId = this.props.router.params.userId
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((res) => {
          this.props.setUserProfile(res.data)
        })
    }
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
  withRouter(ProfileContainerAPI)
)
