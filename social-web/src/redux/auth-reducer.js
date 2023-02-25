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
        ...action.payload,
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

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
})

const setInitialization = () => ({
  type: SET_INITIALIZATION,
})

// Thunk

export const getUserData = () => (dispatch) => {
  usersAPI.authMe().then((data) => {
    const { id, email, login } = data
    dispatch(setUserData(id, email, login, true))
    // initialization APP
    dispatch(setInitialization())
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  usersAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getUserData())
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
