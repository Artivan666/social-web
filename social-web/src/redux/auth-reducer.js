import { stopSubmit } from 'redux-form'
import { usersAPI } from '../api/api'

const SET_USER_DATA = 'AUTH/SET_USER_DATA'

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

export const getAuthUserData = () => async (dispatch) => {
  const data = await usersAPI.authMe()
  if (!data) return
  const { id, email, login } = data
  dispatch(setUserData(id, email, login, true))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const res = await usersAPI.login(email, password, rememberMe)
  if (res.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    const message =
      res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
    // let action = stopSubmit('loginForm', { email: 'email is wrong' })
    let action = stopSubmit('loginForm', { _error: message }) // overall error
    dispatch(action)
  }
}

export const logout = () => async (dispatch) => {
  const res = await usersAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}
