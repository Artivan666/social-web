const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    { id: 1, name: 'Alex', message: 'Hello world' },
    { id: 2, name: 'Stive', message: 'Hi' },
    { id: 3, name: 'Jack', message: 'Wats up!' },
    { id: 4, name: 'Fred', message: 'Yo!' },
  ],
  newPostText: '',
  userProfile: null,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      }

    case ADD_NEW_POST:
      const newPost = {
        id: 5,
        name: 'Fred',
        message: state.newPostText,
      }

      // this._state.profilePage.posts.push(newPost)
      // this._state.profilePage.newPostText = ''
      // this.rerender()
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      }

    default:
      return state
  }
}

// AC

export const updateNewPostText = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
})

export const addNewPost = () => ({
  type: ADD_NEW_POST,
})

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
})
