import s from './Profile.module.css'
import ss from '../../App.module.css'

import { PostsContainer } from './Posts/PostsContainer'
import { UserStatus } from './UserStatus/UserStatus'
import { UserStatusHooks } from './UserStatus/UserStatusHooks'
import { UserPhoto } from './UserPhoto/UserPhoto'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import {
  ProfileInfoForm,
  ReduxProfileInfoForm,
} from './ProfileInfoEdit/ProfileInfoEdit'
import { useState } from 'react'

export const Profile = (props) => {
  const [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    props.saveProfile(formData).then((res) => {
      setEditMode(false)
    })
  }

  return (
    <div className={s.profile + ' ' + ss.os + ' ' + ss.cp}>
      <UserPhoto
        userPhoto={props.userProfile.photos.large}
        authorizedUserId={props.authorizedUserId}
        userProfileId={props.userProfile.userId}
        // pageOwner={props.pageOwner}
        savePhoto={props.savePhoto}
      />

      <div>
        {props.authorizedUserId === props.userProfile.userId && (
          <button
            onClick={() => {
              setEditMode(true)
            }}
          >
            Edit
          </button>
        )}
      </div>

      {editMode ? (
        <ReduxProfileInfoForm
          initialValues={props.userProfile}
          userProfile={props.userProfile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileInfo userProfile={props.userProfile} />
      )}

      <UserStatusHooks
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <PostsContainer />
    </div>
  )
}
