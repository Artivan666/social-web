import { combineReducers, legacy_createStore } from 'redux'
import { authReducer } from './auth-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = legacy_createStore(rootReducer)

export default store

window.store = store
