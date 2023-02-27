import s from './ProfileInfo.module.css'
import ss from '../../../App.module.css'

export const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo + ' ' + ss.os}>
      <div>{props.userProfile.fullName}</div>
      <div>
        <b>Loking for a job: </b>
        {props.userProfile.lookingForAJob ? 'yes' : 'no'}
      </div>

      <div>
        {props.userProfile.lookingForAJob && (
          <div>
            <b>My professional skills: </b>
            {props.userProfile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <b>About me: </b>
        {props.userProfile.aboutMe}
      </div>

      <div>
        <b>Contacts: </b>
        {Object.keys(props.userProfile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={props.userProfile.contacts[key]}
          />
        ))}
      </div>
    </div>
  )
}

const Contact = (props) => {
  return (
    <div className={s.contact + ' ' + ss.os}>
      <b>{props.contactTitle}: </b>
      {props.contactValue}
    </div>
  )
}
