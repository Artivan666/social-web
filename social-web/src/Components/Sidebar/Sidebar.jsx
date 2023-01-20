import s from './Sidebar.module.css'
import ss from '../../App.module.css'
import { Navigation } from './Navigation/Navigation'

export const Sidebar = () => {
  return (
    <div className={s.sidebar + ' ' + ss.os}>
      <Navigation />
    </div>
  )
}
