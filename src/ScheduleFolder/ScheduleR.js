import React, { Component } from 'react'
import EventListR from './EventListR'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'


class ScheduleR extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    base.syncState('events', {
      context: this,
      state: 'events',
      asArray: true,
    })
  }

  render() {
    return (

      <div className="Schedule">
        <h4>Events</h4>


        <EventListR
          user={this.props.user}
          events={this.state.events}
        />


      </div>
    )
  }
}

export default ScheduleR