import s from './ErrorPage.module.css'
import ss from '../../App.module.css'

export const ErrorPage = () => {
  return (
    <div className={s.errorPage + ' ' + ss.os + ' ' + ss.cp}>
      <h1>Page not found</h1>
      <p>Error 404</p>
    </div>
  )
}
