import { combineReducers, legacy_createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
})

let store = legacy_createStore(rootReducer)

export default store

window.store = store
