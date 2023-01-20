import s from './Post.module.css'
import ss from '../../../../App.module.css'

export const Post = (props) => {
  return (
    <div className={s.post + ' ' + ss.os}>
      <div>{props.name}</div>
      <div>{props.message}</div>
    </div>
  )
}
