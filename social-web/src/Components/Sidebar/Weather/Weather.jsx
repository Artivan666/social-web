import s from './Weather.module.css'
import ss from '../../../App.module.css'

export const Weather = () => {
  return (
    <div className={s.weather + ' ' + ss.os}>
      <div className={s.header}>
        <b>Weather</b>
      </div>
      <div className={s.content}>
        <p>Saint-Petersberg</p>
        <p>+3</p>
      </div>
    </div>
  )
}
