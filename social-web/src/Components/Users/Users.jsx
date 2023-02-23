import s from './Users.module.css'
import ss from '../../App.module.css'
import { User } from './User/User'

export const Users = (props) => {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      userId={u.id}
      userName={u.name}
      photos={u.photos}
      followed={u.followed}
      subscribeToUser={props.subscribeToUser}
      unsubscribeToUser={props.unsubscribeToUser}
    />
  ))

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const onChangePage = (pageNumber) => {
    props.changeCurrentPage(pageNumber)
  }

  return (
    <div className={s.users + ' ' + ss.os + ' ' + ss.cp}>
      <div>
        {pages.map((p) => (
          <button
            key={p}
            className={props.currentPage === p ? s.selectedPage : ''}
            onClick={() => {
              onChangePage(p)
            }}
          >
            {p}
          </button>
        ))}
      </div>
      {users}
    </div>
  )
}
