import React, { Component } from 'react'
require('../css/Schedule.css')

class EventForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
      eventTime: '',
      players: {},
      level: '',
      status: 'opened',
    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addEvent(this.state)
    this.setState(
      {
        body: '',
        eventTime: '',
        players: {},
        key: '',
        status: '',
        level: '',
      }
    )
    this.props.history.push('/Schedule')

  }


  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="newEvent"
      >

        <input
          className="input"
          type="text"
          name="body"
          placeholder="Enter Event..."
          value={this.state.body}
          onChange={this.handleChange}
          autoFocus
        /><hr/>
        <input
          className="input"
          type="text"
          name="eventTime"
          placeholder="Enter Event Time"
          value={this.state.eventTime}
          onChange={this.handleChange}
        /><hr/>
        <select
          name="status"
          value={this.state.status}
          onChange={this.handleChange}
        ><hr/>
          <option value="opened">OPENED</option>
          <option value="closed">CLOSED</option>
          <option value="cancelled">CANCELLED</option>
          <option value="confirmed">CONFIRMED</option>
        </select><hr/>
        <select
          name="level"
          value={this.state.level}
          onChange={this.handleChange}
        >
          <option value="player">PLAYER</option>
          <option value="member">MEMBER</option>
          <option value="admin">ADMIN</option>
        </select>
        <hr/>
        <button type="submit"
        >
          <i className="far fa-paper-plane" title="Send"></i>
        </button>

      </form>
    )
  }
}


export default EventForm