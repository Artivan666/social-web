import s from './ProfileInfoEdit.module.css'
import ss from '../../../App.module.css'
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls'
import { maxLength } from '../../../utils/validators/validators'
import { reduxForm } from 'redux-form'

const maxLength20 = maxLength(20)

const ProfileInfoForm = (props) => {
  return (
    <div className={s.profileInfoEdit + ' ' + ss.os}>
      <p>Profile edit mode</p>

      <form onSubmit={props.handleSubmit}>
        <button>Save</button>

        {props.error && <div className={s.overall_error}>{props.error}</div>}

        <div>
          <b>fullName: </b>
          {createField(Input, 'fullName', [maxLength20], 'Full name')}
        </div>

        <div>
          <b>Looking for a job: </b>
          {createField(Input, 'lookingForAJob', null, null, {
            type: 'checkbox',
          })}
        </div>

        <div>
          <b>My professional skills: </b>
          {createField(
            Textarea,
            'lookingForAJobDescription',
            [maxLength20],
            'My pro skills'
          )}
        </div>

        <div>
          <b>About me: </b>
          {createField(Input, 'aboutMe', [maxLength20], 'About me')}
        </div>
      </form>

      <div>
        <b>Contacts: </b>
        {Object.keys(props.userProfile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key} :</b>
              {createField(Input, 'contacts.' + key, [maxLength20], key)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const ReduxProfileInfoForm = reduxForm({ form: 'profileInfoForm' })(
  ProfileInfoForm
)
