import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/arrayProcessing'

const SET_USERS = 'USERS/SET_USERS'
const SUBSCRIBE = 'USERS/SUBSCRIBE'
const UNSUBSCRIBE = 'USERS/UNSUBSCRIBE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING'
const SET_SUBSCRIBE_IN_PROGRESS = 'USERS/SET_SUBSCRIBE_IN_PROGRESS'

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  portionSize: 10,
  isFetching: false,
  subscribeInProgress: [],
  fake: 0,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAKE':
      return {
        ...state,
        fake: state.fake + 1,
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }

    case SUBSCRIBE:
      return {
        ...state,

        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),

        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true }
        //   }
        //   return u
        // }),
      }

    case UNSUBSCRIBE:
      return {
        ...state,

        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),

        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false }
        //   }
        //   return u
        // }),
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case SET_SUBSCRIBE_IN_PROGRESS:
      return {
        ...state,
        subscribeInProgress: action.value
          ? [...state.subscribeInProgress, action.userId]
          : state.subscribeInProgress.filter(
              (userId) => userId != action.userId
            ),
      }

    default:
      return state
  }
}

// AC

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
})

export const follow = (userId) => ({
  type: SUBSCRIBE,
  userId,
})
export const unfollow = (userId) => ({
  type: UNSUBSCRIBE,
  userId,
})

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setToggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const subscribeSuccess = (userId) => ({
  type: SUBSCRIBE,
  userId,
})

export const unsubscribeSuccess = (userId) => ({
  type: UNSUBSCRIBE,
  userId,
})

export const setSubscribeInProgress = (userId, value) => ({
  type: SET_SUBSCRIBE_IN_PROGRESS,
  userId,
  value,
})

// THUNK

export const getUsers = (pageSize, pageNumber) => (dispatch) => {
  dispatch(setToggleIsFetching(true))
  usersAPI.getUsers(pageSize, pageNumber).then((data) => {
    dispatch(setToggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setCurrentPage(pageNumber))
    dispatch(setTotalUsersCount(data.totalCount))
  })
}

const subscribeUnsubscribeFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(setSubscribeInProgress(userId, true))
  const res = await apiMethod(userId)
  if (res.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setSubscribeInProgress(userId, false))
}

export const subscribe = (userId) => (dispatch) => {
  const apiMethod = usersAPI.subscribe
  const actionCreator = subscribeSuccess

  subscribeUnsubscribeFlow(dispatch, userId, apiMethod, actionCreator)
}

export const unsubscribe = (userId) => (dispatch) => {
  const apiMethod = usersAPI.unsubscribe
  const actionCreator = unsubscribeSuccess

  subscribeUnsubscribeFlow(dispatch, userId, apiMethod, actionCreator)
}
