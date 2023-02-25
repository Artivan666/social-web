import s from './Login.module.css'
import ss from '../../App.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={ss.form_style}>
      <div>
        <Field name={'email'} placeholder="Email" component={'input'} />
      </div>
      <div>
        <Field name={'password'} placeholder="Password" component={'input'} />
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'} />
        Remember me.
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.login + ' ' + ss.os + ' ' + ss.cp}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}
