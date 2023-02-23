import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setToggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from '../../redux/users-reducer'
import { Users } from './Users'
import React from 'react'
import axios from 'axios'
import { getUsers, usersAPI } from '../../api/api'

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true)
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.setToggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  changeCurrentPage = (pageNumber) => {
    this.props.setToggleIsFetching(true)
    usersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.setToggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
      this.props.setCurrentPage(pageNumber)
    })
  }

  subscribeToUser = (userId) => {
    usersAPI.subscribe(userId).then((res) => {
      if (res.data.resultCode === 0) {
        this.props.follow(userId)
      }
    })
  }

  unsubscribeToUser = (userId) => {
    usersAPI.unsubscribe(userId).then((res) => {
      if (res.data.resultCode === 0) {
        this.props.unfollow(userId)
      }
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <div>Loading...</div> : null}
        <Users
          {...this.props}
          changeCurrentPage={this.changeCurrentPage}
          subscribeToUser={this.subscribeToUser}
          unsubscribeToUser={this.unsubscribeToUser}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
})

export const UsersContainer = connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  setToggleIsFetching,
})(UsersContainerAPI)
