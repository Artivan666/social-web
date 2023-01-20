import s from './Profile.module.css'
import ss from '../../App.module.css'
import { Posts } from './Posts/Posts'
import img from '../../img/avatar.jpg'

export const Profile = (props) => {
  return (
    <div className={s.profile + ' ' + ss.os + ' ' + ss.cp}>
      <div className={s.userPhoto}>
        <img
          src={img}
          alt="image"
        />
      </div>
      <div>User name</div>
      <div>User status</div>
      <Posts posts={props.posts} />
    </div>
  )
}
