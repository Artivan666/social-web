import s from './Posts.module.css'
import ss from '../../../App.module.css'
import { Post } from './Post/Post'
import React from 'react'
import { addNewPost, updateNewPostText } from '../../../redux/state'

export const Posts = (props) => {
  const ref = React.createRef()

  const onChangePost = () => {
    props.dispatch(updateNewPostText(ref.current.value))
  }

  const onAddPost = () => {
    props.dispatch(addNewPost())
  }

  const posts = props.posts.map((p) => (
    <Post
      key={p.id}
      name={p.name}
      message={p.message}
    />
  ))

  return (
    <div className={s.posts + ' ' + ss.os}>
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
