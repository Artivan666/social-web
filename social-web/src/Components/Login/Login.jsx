import s from './Login.module.css'
import ss from '../../App.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { maxLength, requiredField } from '../../utils/validators/validators'

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={ss.form_style}>
      <div>
        <Field
          name={'email'}
          placeholder="Email"
          component={Input}
          validate={[requiredField, maxLength20]}
        />
      </div>
      <div>
        <Field
          name={'password'}
          type={'password'}
          placeholder="Password"
          component={Input}
          validate={[requiredField, maxLength20]}
        />
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'} />
        Remember me.
      </div>
      {props.error && <div className={s.overall_error}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  return (
    <div className={s.login + ' ' + ss.os + ' ' + ss.cp}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}
