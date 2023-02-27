import { stopSubmit } from 'redux-form'
import { usersAPI } from '../api/api'

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
})

// Thunk

export const getAuthUserData = () => async (dispatch) => {
  const data = await usersAPI.authMe()
  if (!data) return
  const { id, email, login } = data
  dispatch(setUserData(id, email, login, true))
}

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await usersAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
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

export const getCaptchaUrl = () => async (dispatch) => {
  const res = await usersAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(setCaptchaUrl(captchaUrl))
  if (res.data.resultCode === 0) {
    debugger
  }
}
