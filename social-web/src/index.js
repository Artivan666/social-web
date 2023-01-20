import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const postsArray = [
  { id: 1, name: 'Alex', message: 'Hello world' },
  { id: 2, name: 'Stive', message: 'Hi' },
  { id: 3, name: 'Jack', message: 'Wats up!' },
  { id: 4, name: 'Fred', message: 'Yo!' },
]

const dialogsArr = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Stive' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Fred' },
  { id: 5, name: 'Liza' },
]

const messagesArr = [
  { id: 1, message: 'Hello world' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'Wats up!' },
  { id: 4, message: 'Yuho!' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        posts={postsArray}
        dialogs={dialogsArr}
        messages={messagesArr}
      />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
