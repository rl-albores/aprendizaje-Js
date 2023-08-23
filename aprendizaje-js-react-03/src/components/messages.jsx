import React from 'react'
import Hello from './hello-03'

class Messages extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Hello name="Richard" />
      </div>
    )
  }
}

export default Messages
