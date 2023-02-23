import s from './Posts.module.css'
import ss from '../../../App.module.css'
import { Post } from './Post/Post'
import React from 'react'

export const Posts = (props) => {
  const ref = React.createRef()

  const onChangePost = () => {
    props.changePost(ref.current.value)
  }

  const onAddPost = () => {
    props.addPost()
  }

  const posts = props.posts.map((p) => (
    <Post key={p.id} name={p.name} message={p.message} />
  ))

  return (
    <div className={s.posts + ' ' + ss.os}>
      <TestComponent />
      <div className={s.post_box}>
        <div className={s.newPostBlock}>
          <div>
            <textarea
              onChange={onChangePost}
              value={props.newPostText}
              ref={ref}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button
              onClick={() => {
                onAddPost()
              }}
            >
              Add post
            </button>
          </div>
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
