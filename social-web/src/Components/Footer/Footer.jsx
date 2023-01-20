import s from './Footer.module.css'
import ss from '../../App.module.css'

export const Footer = () => {
  return (
    <div className={s.footer + ' ' + ss.os}>
      <p>Footer</p>
    </div>
  )
}
