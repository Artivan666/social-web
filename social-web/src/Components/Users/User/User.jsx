import s from './User.module.css'
import ss from '../../../App.module.css'
import img from '../../../img/avatar.jpg'
import { NavLink } from 'react-router-dom'

export const User = (props) => {
  const onFollow = (userId) => {
    props.subscribeToUser(userId)
  }

  const onUnfollow = (userId) => {
    props.unsubscribeToUser(userId)
  }

  return (
    <div className={s.user + ' ' + ss.os}>
      <div className={s.user_photo}>
        <NavLink to={`/profile/${props.userId}`}>
          <img src={props.photos.small ? props.photos.small : img} alt="" />
        </NavLink>
      </div>
      <div>{props.userName}</div>
      <div>User Status</div>
      {props.followed ? (
        <button
          onClick={() => {
            onUnfollow(props.userId)
          }}
        >
          Unfollow
        </button>
      ) : (
        ''
      )}
      {!props.followed ? (
        <button
          onClick={() => {
            onFollow(props.userId)
          }}
        >
          Follow
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
