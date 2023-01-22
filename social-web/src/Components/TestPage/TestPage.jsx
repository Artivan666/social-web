import s from './TestPage.module.css'
import ss from '../../App.module.css'
import axios from 'axios'

export const TestPage = () => {
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div className={s.testPage + ' ' + ss.os + ' ' + ss.cp}>
      <p>Test page</p>
      <div>
        <button
          onClick={() => {
            getData()
          }}
        >
          get
        </button>
      </div>
    </div>
  )
}
