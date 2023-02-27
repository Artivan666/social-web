import s from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { Main } from './Components/Main/Main'
import { Sidebar } from './Components/Sidebar/Sidebar'

import { Routes, Route } from 'react-router-dom'
import { ErrorPage } from './Components/ErrorPage/ErrorPage'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import { UsersContainer } from './Components/Users/UsersContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import LoginContainer from './Components/Login/LoginContainer'
import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'

// component for lasy loading must export DEFOULT!!!
const TestPage = lazy(() => import('./Components/TestPage/TestPage'))
const Video = lazy(() => import('./Components/Video/Video'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <p>Initializing...</p>
    return (
      <div className={s.app}>
        <HeaderContainer />
        <Sidebar />
        <div className={s.content}>
          <Suspense fallback={<div>Lazy loading...</div>}>
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
          </Suspense>
        </div>
        <Footer />
      </div>
    )
  }
}

// only one element
// ;<Suspense
//   fallback={
//     <div>
//       <Preloader />
//     </div>
//   }
// >
//   <DialogsContainer />
// </Suspense>

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)
