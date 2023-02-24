import { usersAPI } from '../api/api'

const SET_INITIALIZATION = 'SET_INITIALIZATION'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  initialization: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true,
      }

    case SET_INITIALIZATION:
      return {
        ...state,
        initialization: true,
      }

    default:
      return state
  }
}

// AC

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  userData,
})

const setInitialization = () => ({
  type: SET_INITIALIZATION,
})

// Thunk

export const getUserData = () => (dispatch) => {
  usersAPI.authMe().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setUserData(res.data.data))
    }
    // initialization APP
    dispatch(setInitialization())
  })
}
