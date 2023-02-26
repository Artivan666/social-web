import s from './Pagination.module.css'
import ss from '../../../App.module.css'

export const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  changeCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const onChangePage = (pageNumber) => {
    changeCurrentPage(pageNumber)
  }

  return (
    <div className={s.pagination + ' ' + ss.os}>
      {pages.map((p) => (
        <button
          key={p}
          className={currentPage === p ? s.selectedPage : ''}
          onClick={() => {
            onChangePage(p)
          }}
        >
          {p}
        </button>
      ))}
    </div>
  )
}
