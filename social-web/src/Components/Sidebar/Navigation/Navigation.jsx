import s from './Navigation.module.css'
import ss from '../../../App.module.css'

export const Navigation = () => {
  return (
    <div className={s.navigation + ' ' + ss.os}>
      <p>Navigation</p>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">Users</a>
      </div>
    </div>
  )
}
