// selector функция, которая принимает state, достает что нужно
// и возвращает в бизнес

import { createSelectorHook, useSelector } from 'react-redux'

// mapStateToProps срабатывает каждый раз когда в state что либо меняется

export const getUsersFromState = (state) => {
  return state.usersPage.users
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getSubscribeInProgress = (state) => {
  return state.usersPage.subscribeInProgress
}

export const somethingDifficult = (state) => {
  // math... for...
  const count = 34
  return 34
}
