import s from './TestPage.module.css'
import ss from '../../App.module.css'

export const TestPage = () => {
  return (
    <div className={s.testPage + ' ' + ss.os}>
      <p>Test page</p>
    </div>
  )
}
