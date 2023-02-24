import { connect } from 'react-redux'
import {
  getUsers,
  setSubscribeInProgress,
  subscribe,
  unsubscribe,
} from '../../redux/users-reducer'
import { Users } from './Users'
import React from 'react'
import { usersAPI } from '../../api/api'

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }

  changeCurrentPage = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber)
  }

  subscribeToUser = (userId) => {
    this.props.subscribe(userId)
  }

  unsubscribeToUser = (userId) => {
    this.props.unsubscribe(userId)
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
  subscribeInProgress: state.usersPage.subscribeInProgress,
})

export const UsersContainer = connect(mapStateToProps, {
  getUsers,
  setSubscribeInProgress,
  subscribe,
  unsubscribe,
})(UsersContainerAPI)
