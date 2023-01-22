import s from './Navigation.module.css'
import ss from '../../../App.module.css'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? s.active : '')

  return (
    <div className={s.navigation + ' ' + ss.os}>
      <p>Navigation</p>
      <div className={s.item}>
        <NavLink
          to=""
          className={setActive}
        >
          Main
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={setActive}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={setActive}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/users"
          className={setActive}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/video"
          className={setActive}
        >
          Video
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/test_page"
          className={setActive}
        >
          Test page
        </NavLink>
      </div>
    </div>
  )
}
