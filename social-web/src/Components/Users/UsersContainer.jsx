import { connect } from 'react-redux'
import {
  getUsers,
  setSubscribeInProgress,
  subscribe,
  unsubscribe,
} from '../../redux/users-reducer'
import { Users } from './Users'
import React from 'react'
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getSubscribeInProgress,
  getTotalUsersCount,
  getUsersFromState,
  getUsersFromStateSelector,
  getUsersSuper,
  getUsersSuperSelector,
} from '../../redux/users-selectors'

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
    console.log('render users')
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

const mapStateToProps = (state) => {
  console.log('mapStatetoProps users')
  return {
    users: getUsersFromState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    portionSize: state.usersPage.portionSize,
    isFetching: getIsFetching(state),
    subscribeInProgress: getSubscribeInProgress(state),
  }
}

export const UsersContainer = connect(mapStateToProps, {
  getUsers,
  setSubscribeInProgress,
  subscribe,
  unsubscribe,
})(UsersContainerAPI)
