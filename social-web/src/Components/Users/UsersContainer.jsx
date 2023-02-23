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

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.setToggleIsFetching(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  changeCurrentPage = (pageNumber) => {
    this.props.setToggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.setToggleIsFetching(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        this.props.setCurrentPage(pageNumber)
      })
  }

  subscribeToUser = (userId) => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
          },
        }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.follow(userId)
        }
      })
  }

  unsubscribeToUser = (userId) => {
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          'API-KEY': 'e5f2c05d-3abf-4136-95a0-734ede57770a',
        },
      })
      .then((res) => {
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
