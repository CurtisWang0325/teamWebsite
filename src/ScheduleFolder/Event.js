import React, { Component } from 'react'
import PlayerList from './PlayerList'

class Event extends Component {
  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteEvent(this.props.t)
  }

  render() {
    return (

      <span>
        <p>
          Description:{this.props.txt}
        </p>
        <p>
          Time:{this.props.eventTime}
        </p>
        <PlayerList
          user={this.props.user}
        />
        <button type='button' onClick={this.handleDelete}>
          <i className="fas fa-minus" title='delete'></i>
        </button>
        <hr />
      </span>

    )
  }

}





export default Event