import s from './Dialogs.module.css'
import ss from '../../App.module.css'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { maxLength, requiredField } from '../../utils/validators/validators'

const maxLength10 = maxLength(10)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={ss.form_style}>
      <div>
        <Field
          component={Input}
          name={'message'}
          placeholder={'Message'}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const ReduxDialogsForm = reduxForm({ form: 'dialogsForm' })(DialogsForm)

export const Dialogs = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.active : '')

  const dialogs = props.dialogs.map((d) => (
    <div key={d.id} className={s.item}>
      <NavLink to={`/dialogs/${d.id}`} className={setActive}>
        {d.name}
      </NavLink>
    </div>
  ))

  const messages = props.messages.map((m) => <div key={m.id}>{m.message}</div>)

  // const onChangeMessage = (e) => {
  //   props.changeMessage(e.target.value)
  // }

  // const onSendMessage = () => {
  //   props.sendMessage()
  // }

  const onSubmit = (formData) => {
    console.log(formData.message)
    props.addNewMessage(formData.message)
  }

  return (
    <div className={s.dialogs + ' ' + ss.os + ' ' + ss.cp}>
      <p>Dialogs</p>
      <div className={s.newMessageBlock}>
        <ReduxDialogsForm onSubmit={onSubmit} />
      </div>
      <div className={s.messagesList}>
        <div className={s.messagesListBox}>{messages}</div>
        <div className={s.dialogsListBox}>{dialogs}</div>
      </div>
    </div>
  )
}
