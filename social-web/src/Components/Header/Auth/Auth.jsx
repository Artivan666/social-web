import s from './Auth.module.css'
import ss from '../../../App.module.css'

export const Auth = (props) => {
  return (
    <div className={s.auth + ' ' + ss.os}>
      <p>Auth</p>
      <div>{props.isAuth ? props.login : <button>Login</button>}</div>
    </div>
  )
}
