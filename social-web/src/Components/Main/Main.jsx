import s from './Main.module.css'
import ss from '../../App.module.css'

export const Main = () => {
  return (
    <div className={s.main + ' ' + ss.os + ' ' + ss.cp}>
      <p>Main</p>
    </div>
  )
}
