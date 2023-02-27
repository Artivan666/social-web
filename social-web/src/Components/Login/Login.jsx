import s from './Login.module.css'
import ss from '../../App.module.css'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { maxLength, requiredField } from '../../utils/validators/validators'

const maxLength20 = maxLength(20)

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={ss.form_style}>
      {createField(Input, 'email', [requiredField, maxLength20], 'Email')}
      {createField(
        Input,
        'password',
        [requiredField, maxLength20],
        'Password',
        { type: 'password' }
      )}
      {createField(
        Input,
        'rememberMe',
        null,
        null,
        { type: 'checkbox' },
        'Remember me'
      )}

      {captchaUrl && <img src={captchaUrl} alt="captcha-img" />}
      {captchaUrl && createField(Input, 'captcha', [requiredField], null, null)}

      {error && <div className={s.overall_error}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }

  return (
    <div className={s.login + ' ' + ss.os + ' ' + ss.cp}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
