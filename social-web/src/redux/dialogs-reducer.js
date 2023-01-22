const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      }

    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      }

    default:
      return state
  }
}

// AC

export const updateNewMessageText = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText,
})

export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
})
