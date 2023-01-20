import s from './Main.module.css'
import ss from '../../App.module.css'

export const Main = () => {
  return (
    <div className={s.main + ' ' + ss.os}>
      <p>Main</p>
    </div>
  )
}
