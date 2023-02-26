import { usersAPI } from '../api/api'

const ADD_NEW_POST = 'PROFILE/ADD_NEW_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS'
const DELETE_POST = 'PROFILE/DELETE_POST'

const initialState = {
  posts: [
    { id: 1, name: 'Alex', message: 'Hello world' },
    { id: 2, name: 'Stive', message: 'Hi' },
    { id: 3, name: 'Jack', message: 'Wats up!' },
    { id: 4, name: 'Fred', message: 'Yo!' },
  ],
  userProfile: null,
  userStatus: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = {
        id: 5,
        name: 'Fred',
        message: action.newMessage,
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      }

    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      }

    default:
      return state
  }
}

// AC

export const addNewPost = (newMessage) => ({
  type: ADD_NEW_POST,
  newMessage,
})

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
})

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
})

const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
})

// Thunk

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
  const data = await usersAPI.getUserStatus(userId)
  dispatch(setUserStatus(data))
}

export const updateUserStatus = (userStatus) => async (dispatch) => {
  const res = await usersAPI.updateUserStatus(userStatus)
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(userStatus))
  }
}
