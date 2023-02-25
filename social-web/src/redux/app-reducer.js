import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }
}

// AC

const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
})

// Thunk

export const initializeApp = () => (dispatch) => {
  const promise1 = dispatch(getAuthUserData())

  Promise.all([promise1]).then(() => {
    dispatch(initializedSuccess())
  })
}
