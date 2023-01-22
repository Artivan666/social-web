import s from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Profile } from './Components/Profile/Profile'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { TestPage } from './Components/TestPage/TestPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage } from './Components/ErrorPage/ErrorPage'
import { Video } from './Components/Video/Video'
import { DialogsContainer } from './Components/Dialogs/DialogsContainer'
import { Users } from './Components/Users/Users'
import { UsersContainer } from './Components/Users/UsersContainer'

export const App = (props) => {
  return (
    <div className={s.app}>
      <Header />
      <Sidebar />
      <div className={s.content}>
        <Routes>
          <Route
            path=""
            element={<Main />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer />}
          />
          <Route
            path="/users"
            element={<UsersContainer />}
          />
          <Route
            path="/video"
            element={<Video />}
          />
          <Route
            path="/test_page"
            element={<TestPage />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
