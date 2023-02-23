const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SUBSCRIBE = 'SUBSCRIBE'
const UNSUBSCRIBE = 'UNSUBSCRIBE'
const SET_SUBSCRIBE_IN_PROGRESS = 'SET_SUBSCRIBE_IN_PROGRESS'

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  subscribeInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
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
  type: FOLLOW,
  userId,
})
export const unfollow = (userId) => ({
  type: UNFOLLOW,
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

export const subscibe = (userId) => ({
  type: SUBSCRIBE,
  userId,
})

export const unsubscribe = (userId) => ({
  type: UNSUBSCRIBE,
  userId,
})

export const setSubscribeInProgress = (userId, value) => ({
  type: SET_SUBSCRIBE_IN_PROGRESS,
  userId,
  value,
})
