import s from './User.module.css'
import ss from '../../../App.module.css'
import img from '../../../img/avatar.jpg'

export const User = (props) => {
  const onFollow = (userId) => {
    props.follow(userId)
  }

  const onUnfollow = (userId) => {
    props.unfollow(userId)
  }

  return (
    <div className={s.user + ' ' + ss.os}>
      <div className={s.user_photo}>
        <img
          src={props.photos.small ? props.photos.small : img}
          alt=""
        />
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
