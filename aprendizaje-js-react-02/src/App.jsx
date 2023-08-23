import React from 'react'
import ReactDOM from 'react-dom/client'
import Messages from './components/messages'
import Link from './components/link'

import './App.css'

class Apples extends React.Component {
  render() {
    const url = 'http://soyRicardo.com'
    return (
      <div>
        <Messages />
        <nav>
          <Link url={url} caption="My site" />
          <Link url="https://github.com/rl-albores" caption="My Github" />
        </nav>
      </div>
    )
  }
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<Apples />)
}
export default App
