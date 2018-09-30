import React, { Component } from 'react'
require('../css/Schedule.css')

class EventForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
      eventTime: '',
      players: {},
      level: 'player',
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
        status: 'opened',
        level: 'player',
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
          autoFocus='true'
          maxLength='30'
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
          name="level"
          value={this.state.level}
          onChange={this.handleChange}
        >
          <option value="player">PLAYER</option>
          <option value="member">MEMBER</option>
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