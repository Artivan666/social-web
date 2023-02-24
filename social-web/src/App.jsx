import s from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { Main } from './Components/Main/Main'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { TestPage } from './Components/TestPage/TestPage'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage } from './Components/ErrorPage/ErrorPage'
import { Video } from './Components/Video/Video'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import { UsersContainer } from './Components/Users/UsersContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import LoginContainer from './Components/Login/LoginContainer'

export const App = (props) => {
  return (
    <div className={s.app}>
      <HeaderContainer />
      <Sidebar />
      <div className={s.content}>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/video" element={<Video />} />
          <Route path="/test_page" element={<TestPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
