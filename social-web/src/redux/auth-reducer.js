import { stopSubmit } from 'redux-form'
import { usersAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
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
        ...action.payload,
      }

    default:
      return state
  }
}

// AC

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
})

// Thunk

export const getAuthUserData = () => (dispatch) => {
  return usersAPI.authMe().then((data) => {
    const { id, email, login } = data
    dispatch(setUserData(id, email, login, true))
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  usersAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      const message =
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      // let action = stopSubmit('loginForm', { email: 'email is wrong' })
      let action = stopSubmit('loginForm', { _error: message }) // overall error
      dispatch(action)
    }
  })
}

export const logout = () => (dispatch) => {
  usersAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
    }
  })
}
