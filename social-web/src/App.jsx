import s from './App.module.css'
import { Dialogs } from './Components/Dialogs/Dialogs'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Profile } from './Components/Profile/Profile'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { TestPage } from './Components/TestPage/TestPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage } from './Components/ErrorPage/ErrorPage'
import { Video } from './Components/Video/Video'

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
            element={<Profile posts={props.posts} />}
          />
          {/* <Route
            path="/dialogs/"
            element={<Dialogs />}
          /> */}
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogs={props.dialogs}
                messages={props.messages}
              />
            }
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
