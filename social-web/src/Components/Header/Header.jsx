import s from './Header.module.css'
import ss from '../../App.module.css'
import { Logo } from './Logo/Logo'
import { Contacts } from './Contacts/Contacts'

export const Header = () => {
  return (
    <div className={s.header + ' ' + ss.os}>
      <Logo />
      <Contacts />
    </div>
  )
}
