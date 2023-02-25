import s from './Posts.module.css'
import ss from '../../../App.module.css'
import { Post } from './Post/Post'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, requiredField } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLength(10)

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={ss.form_style}>
      <div>
        <Field
          component={Textarea}
          name={'message'}
          placeholder={'New post message'}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const ReduxPostForm = reduxForm({ form: 'postForm' })(PostForm)

export const Posts = (props) => {
  const ref = React.createRef()

  const posts = props.posts.map((p) => (
    <Post key={p.id} name={p.name} message={p.message} />
  ))

  const onSubmit = (formData) => {
    console.log(formData.message)
    props.addNewPost(formData.message)
  }

  return (
    <div className={s.posts + ' ' + ss.os}>
      <TestComponent />
      <div className={s.post_box}>
        <div className={s.newPostBlock}>
          <ReduxPostForm onSubmit={onSubmit} />
        </div>
      </div>
      <div className={s.post_list}>{posts}</div>
    </div>
  )
}

const TestComponent = (props) => {
  return (
    <div>
      <p>Test component</p>
    </div>
  )
}
