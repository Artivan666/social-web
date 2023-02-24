import {
  addNewMessage,
  updateNewMessageText,
} from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

// const DialogswithAuthRedirect = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  changeMessage(newMessageText) {
    dispatch(updateNewMessageText(newMessageText))
  },
  sendMessage() {
    dispatch(addNewMessage())
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

// export const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DialogswithAuthRedirect)
