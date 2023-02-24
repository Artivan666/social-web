import s from './Profile.module.css'
import ss from '../../App.module.css'
import img from '../../img/avatar.jpg'
import { PostsContainer } from './Posts/PostsContainer'
import { UserStatus } from './UserStatus/UserStatus'

export const Profile = (props) => {
  return (
    <div className={s.profile + ' ' + ss.os + ' ' + ss.cp}>
      <div className={s.userPhoto}>
        <img
          src={
            props.userProfile.photos.large
              ? props.userProfile.photos.large
              : img
          }
          alt="image"
        />
      </div>
      <div>{props.userProfile.fullName}</div>
      <div>
        <b>About me: </b>
        {props.userProfile.aboutMe}
      </div>
      <UserStatus
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <PostsContainer />
    </div>
  )
}
