import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from '../../redux/users-reducer'
import { Users } from './Users'
import React from 'react'
import axios from 'axios'

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  changeCurrentPage = (pageNumber) => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        this.props.setCurrentPage(pageNumber)
      })
  }

  render() {
    return <Users {...this.props} changeCurrentPage={this.changeCurrentPage} />
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
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
  setTotalUsersCount(totalUsersCount) {
    dispatch(setTotalUsersCount(totalUsersCount))
  },
  setCurrentPage(currentPage) {
    dispatch(setCurrentPage(currentPage))
  },
})

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainerAPI)
