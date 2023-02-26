import s from './UserStatus.module.css'
import ss from '../../../App.module.css'
import React, { useState } from 'react'

export const UserStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [userStatus, setUserStatus] = useState(props.userStatus)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(userStatus)
  }

  const onUserStatusChange = (e) => {
    setUserStatus(e.currentTarget.value)
  }

  return (
    <div className={s.userStatus + ' ' + ss.os}>
      {editMode ? (
        <div>
          <input
            onChange={onUserStatusChange}
            value={userStatus}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      ) : (
        <div onDoubleClick={activateEditMode}>
          {props.userStatus ? props.userStatus : '-----'}
        </div>
      )}
    </div>
  )
}
