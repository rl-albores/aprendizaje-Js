import React from 'react'
import Task from './task'

class ToDo extends React.Component {
  render() {
    return (
      <ul>
        <Task name="Introduccion" done />
        <Task name="Capitulo 1 - Primer Componente" done />
        <Task name="Capitulo 2 - Propiedades" done={false} />
        <Task />
      </ul>
    )
  }
}

export default ToDo
