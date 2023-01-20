import s from './Dialogs.module.css'
import ss from '../../App.module.css'
import { NavLink } from 'react-router-dom'

export const Dialogs = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.active : '')

  const dialogs = props.dialogs.map((d) => (
    <div
      key={d.key}
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

  return (
    <div className={s.dialogs + ' ' + ss.os + ' ' + ss.cp}>
      <p>Dialogs</p>
      <div className={s.newMessageBlock}>
        <div>
          <input
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <div className={s.messagesList}>
        <div className={s.messagesListBox}>{messages}</div>
        <div className={s.dialogsListBox}>{dialogs}</div>
      </div>
    </div>
  )
}
