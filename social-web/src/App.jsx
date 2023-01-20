import s from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { TestPage } from './Components/TestPage/TestPage'

export const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <Sidebar />
      <div className={s.content}>
        <Main />
        {/* <TestPage /> */}
      </div>
      <Footer />
    </div>
  )
}
