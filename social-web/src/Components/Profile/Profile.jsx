import s from './Profile.module.css'
import ss from '../../App.module.css'

import { PostsContainer } from './Posts/PostsContainer'
import { UserStatus } from './UserStatus/UserStatus'
import { UserStatusHooks } from './UserStatus/UserStatusHooks'
import { UserPhoto } from './UserPhoto/UserPhoto'

export const Profile = (props) => {
  return (
    <div className={s.profile + ' ' + ss.os + ' ' + ss.cp}>
      <UserPhoto
        userPhoto={props.userProfile.photos.large}
        authorizedUserId={props.authorizedUserId}
        userProfileId={props.userProfile.userId}
        // pageOwner={props.pageOwner}
        savePhoto={props.savePhoto}
      />
      <div>{props.userProfile.fullName}</div>
      <div>
        <b>About me: </b>
        {props.userProfile.aboutMe}
      </div>
      <UserStatusHooks
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <PostsContainer />
    </div>
  )
}
