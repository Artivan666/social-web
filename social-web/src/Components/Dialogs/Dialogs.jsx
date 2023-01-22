import s from './Dialogs.module.css'
import ss from '../../App.module.css'
import { NavLink } from 'react-router-dom'
import {
  addNewMessage,
  updateNewMessageText,
} from '../../redux/dialogs-reducer'

export const Dialogs = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.active : '')

  const dialogs = props.dialogs.map((d) => (
    <div
      key={d.id}
      className={s.item}
    >
      <NavLink
        to={`/dialogs/${d.id}`}
        className={setActive}
      >
        {d.name}
      </NavLink>
    </div>
  ))

  const messages = props.messages.map((m) => <div key={m.id}>{m.message}</div>)

  const onChangeMessage = (e) => {
    props.changeMessage(e.target.value)
  }

  const onSendMessage = () => {
    props.sendMessage()
  }

  console.log('render dialogs')

  return (
    <div className={s.dialogs + ' ' + ss.os + ' ' + ss.cp}>
      <p>Dialogs</p>
      <div className={s.newMessageBlock}>
        <div>
          <input
            onChange={(e) => {
              onChangeMessage(e)
            }}
            value={props.newMessageText}
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <button
            onClick={() => {
              onSendMessage()
            }}
          >
            Send
          </button>
        </div>
      </div>
      <div className={s.messagesList}>
        <div className={s.messagesListBox}>{messages}</div>
        <div className={s.dialogsListBox}>{dialogs}</div>
      </div>
    </div>
  )
}
