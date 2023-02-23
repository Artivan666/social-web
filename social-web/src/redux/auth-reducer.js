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
        ...action.userData,
        isAuth: true,
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
