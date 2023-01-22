import { connect } from 'react-redux'
import { follow, setUsers, unfollow } from '../../redux/users-reducer'
import { Users } from './Users'

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
})

const mapDispatchToProps = (dispatch) => ({
  setUsers(users) {
    dispatch(setUsers(users))
  },
  follow(userId) {
    dispatch(follow(userId))
  },
  unfollow(userId) {
    dispatch(unfollow(userId))
  },
})

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
