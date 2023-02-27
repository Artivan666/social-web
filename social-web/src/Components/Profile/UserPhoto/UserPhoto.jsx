import s from './UserPhoto.module.css'
import ss from '../../../App.module.css'
import img from '../../../img/avatar.jpg'

export const UserPhoto = (props) => {
  const onChangeMainPhoto = (e) => {
    if (e.target.files.length > 0) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.userPhoto + ' ' + ss.os}>
      {/* <p>{props.pageOwner}</p> */}
      <div className={s.userPhotoBox}>
        <img src={props.userPhoto ? props.userPhoto : img} alt="image" />
      </div>
      <div>
        {props.authorizedUserId === props.userProfileId && (
          <input onChange={onChangeMainPhoto} type="file" />
        )}
      </div>
    </div>
  )
}
