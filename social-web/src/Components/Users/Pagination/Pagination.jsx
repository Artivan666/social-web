import s from './Pagination.module.css'
import ss from '../../../App.module.css'
import { useState } from 'react'

export const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  portionSize,
  changeCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)

  const [portionNumber, setPortionNumber] = useState(1)
  const leftLimitPortion = (portionNumber - 1) * portionSize + 1
  const rightLimitPortion = portionNumber * portionSize

  const onChangePage = (pageNumber) => {
    changeCurrentPage(pageNumber)
  }

  return (
    <div className={s.pagination + ' ' + ss.os}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftLimitPortion && p <= rightLimitPortion)
        .map((p) => (
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
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          Next
        </button>
      )}
    </div>
  )
}
