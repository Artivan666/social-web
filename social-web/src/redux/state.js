const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, name: 'Alex', message: 'Hello world' },
        { id: 2, name: 'Stive', message: 'Hi' },
        { id: 3, name: 'Jack', message: 'Wats up!' },
        { id: 4, name: 'Fred', message: 'Yo!' },
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Stive' },
        { id: 3, name: 'Jack' },
        { id: 4, name: 'Fred' },
        { id: 5, name: 'Liza' },
      ],

      messages: [
        { id: 1, message: 'Hello world' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Wats up!' },
        { id: 4, message: 'Yuho!' },
      ],

      newMessageText: '',
    },
  },

  getState() {
    return this._state
  },

  rerender() {
    console.log('state was changed')
  },

  subscriber(observable) {
    this.rerender = observable
  },

  dispatch(action) {
    switch (action.type) {
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newPostText
        this.rerender()
        break

      case ADD_NEW_POST:
        const newPost = {
          id: 5,
          name: 'Fred',
          message: this._state.profilePage.newPostText,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerender()
        break

      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.newMessageText
        this.rerender()
        break

      case ADD_NEW_MESSAGE:
        const newMessage = {
          id: 5,
          message: this._state.dialogsPage.newMessageText,
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.rerender()
        break
    }
  },
}

export default store

window.store = store

// AC

export const updateNewPostText = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
})

export const addNewPost = () => ({
  type: ADD_NEW_POST,
})

export const updateNewMessageText = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText,
})

export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
})
