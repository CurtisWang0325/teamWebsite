import React, { Component } from 'react'
import PlayerList from './PlayerList'
import base from '../base'

class Event extends Component {
  state = {
    players: {},
    status: 'open',
    //status: passed, confirmed, opened, cancelled
  }

  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteEvent(this.props.index)
  }

  handleAddPlayer = (pos, user) => {
    if (this.state.status !== 'opened') {
      window.alert("This event is unavailable now!")
      return
    }
    if (this.props.level === 'player' && !(user.level === 'member' || user.level === 'admin' || user.level === 'player')) {
      window.alert("You have to sign in to register for this event")
      return
    }
    if (this.props.level === 'member' && !(user.level === 'member' || user.level === 'admin')) {
      window.alert("You have to be a team member for this event! ")
      return
    }
    var result = window.confirm(`Join event: ${this.props.txt} at ${this.props.eventTime}?`)
    if (!result) {
      return
    }
    const players = this.state.players
    players[pos] = { user };
    this.setState({ players })
  }

  handleChangeStatus = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });

  }

  componentDidMount() {
    base.syncState(`events/${this.props.index}/players`, {
      context: this,
      state: 'players',
    })
    base.syncState(`events/${this.props.index}/status`, {
      context: this,
      state: 'status',
    })
  }

  render() {
    return (

        <div className="events">
            <h2 className="eventName">
                {/* Title/Description*/}
                {this.props.txt}
            </h2>
            <div className="removeEvent" onClick={this.handleDelete}>
                <i className="fas fa-trash fa-2x" title='delete'></i>
            </div>
            <h4>
                Time:{this.props.eventTime}
            </h4>
            <h4>Status:{this.props.status}</h4>
            <div className="editLevel">
                <h4>Level:{this.props.level}</h4>

                {/* StatusEditor */}

                <select
                    name="status"
                    value={this.state.status}
                    onChange={this.handleChangeStatus}
                >
                    <option value="opened">OPENED</option>
                    <option value="over">OVER</option>
                    <option value="cancelled">CANCELLED</option>
                    <option value="confirmed">CONFIRMED</option>
                </select>
            </div>
            <PlayerList
                user={this.props.user}
                handleAddPlayer={this.handleAddPlayer}
                players={this.state.players}
            />
        </div>

    )
  }

}





export default Event