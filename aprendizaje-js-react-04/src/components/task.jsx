import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }

  static defaultProps = {
    //name: 'Unknow task',
    done: false,
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.done ? 'checked' : null} />
        {this.props.name}
      </li>
    )
  }
}

export default Task
