import React, { Component } from 'react'
import EventListR from './EventListR'
import base from '../base'

class ScheduleR extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
      showIns: false,
    }
  }

  componentDidMount() {
    base.syncState('events', {
      context: this,
      state: 'events',
      asArray: true,
    })
  }

  showOrHideIns = () => {
    this.setState({ showIns: !this.state.showIns })
  }

  render() {
    return (

      <div className="Schedule">
        <h1 className="scheduleTitle">Recent Event</h1>
        <EventListR
          user={this.props.user}
          events={this.state.events}
        />


      </div>
    )
  }
}

export default ScheduleR