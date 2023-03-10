import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { MainApp } from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

// setInterval(() => {
//   store.dispatch({ type: 'FAKE' })
// }, 1000)

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = () => {
  root.render(
    // <React.StrictMode>
    <MainApp />
    // </React.StrictMode>
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
