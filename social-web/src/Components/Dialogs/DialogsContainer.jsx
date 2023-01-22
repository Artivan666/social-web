import {
  addNewMessage,
  updateNewMessageText,
} from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  changeMessage(newMessageText) {
    dispatch(updateNewMessageText(newMessageText))
  },
  sendMessage() {
    dispatch(addNewMessage())
  },
})

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
