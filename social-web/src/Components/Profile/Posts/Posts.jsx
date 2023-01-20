import s from './Posts.module.css'
import ss from '../../../App.module.css'
import { Post } from './Post/Post'

export const Posts = (props) => {
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
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.post_list}>{posts}</div>
    </div>
  )
}
