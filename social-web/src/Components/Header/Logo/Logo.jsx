import s from './Logo.module.css'
import ss from '../../../App.module.css'

export const Logo = () => {
  return (
    <div className={s.logo + ' ' + ss.os}>
      <p>Logo</p>
    </div>
  )
}
