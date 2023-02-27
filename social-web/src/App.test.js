import { render, screen } from '@testing-library/react'
import App, { MainApp } from './App'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

// ------------------ depricate -------------------
// ReactDOM is depricated

// it('renders learn react link', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<MainApp />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

// test('renders learn react link', () => {
//   const div = document.createElement('div')
//   const root = createRoot(div)
//   root.render(<MainApp tab="home" />)
//   root.unmount()
// })

test('renders without crashing', () => {
  const container = document.createElement('div')
  const root = createRoot(container)
  root.render(<MainApp tab="home" />)
  root.unmount()
})
