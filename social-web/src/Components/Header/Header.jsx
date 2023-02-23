import s from './Header.module.css'
import ss from '../../App.module.css'
import { Logo } from './Logo/Logo'
import { Contacts } from './Contacts/Contacts'
import { Auth } from './Auth/Auth'

export const Header = (props) => {
  return (
    <div className={s.header + ' ' + ss.os}>
      <Logo />
      <Contacts />
      <Auth isAuth={props.isAuth} login={props.login} />
    </div>
  )
}
