import s from './Users.module.css'
import ss from '../../App.module.css'
import { User } from './User/User'
import { Pagination } from './Pagination/Pagination'

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
      subscribeInProgress={props.subscribeInProgress}
    />
  ))

  return (
    <div className={s.users + ' ' + ss.os + ' ' + ss.cp}>
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        changeCurrentPage={props.changeCurrentPage}
      />
      {users}
    </div>
  )
}
