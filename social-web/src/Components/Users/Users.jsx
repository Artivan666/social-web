import s from './Users.module.css'
import ss from '../../App.module.css'
import { User } from './User/User'
import axios from 'axios'

export const Users = (props) => {
  const onGetUsers = () => {
    if (!props.users.length) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users?page=224')
        .then((res) => {
          props.setUsers(res.data.items)
        })
    }
  }

  const users = props.users.map((u) => (
    <User
      key={u.id}
      userId={u.id}
      userName={u.name}
      photos={u.photos}
      followed={u.followed}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ))

  return (
    <div className={s.users + ' ' + ss.os + ' ' + ss.cp}>
      <div>
        <button
          onClick={() => {
            onGetUsers()
          }}
        >
          Get users
        </button>
      </div>
      {users}
    </div>
  )
}
