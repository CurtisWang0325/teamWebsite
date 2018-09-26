import React, { Component } from 'react'
import EventListR from './EventListR'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'


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

        <div id="instruction">
          <div id="instruction_btn" onClick={this.showOrHideIns}>
            <i className={"fa fa-question-circle fa-2x"}>
            </i>
          </div>
          {
            this.state.showIns ?
              <span>
                <p>
                  * Sign up the event 2 days before the event time
                  <br />
                  * Add "Curtisy" and be prepared before the scheduled time
                  <br />
                  * Attend confirmed events and ignore cancelled ones
                  <br />
                  * Contact the manager ASAP if you can't attend the signed-up event
                </p>
              </span>
              :
              null
          }
        </div>

        <EventListR
          user={this.props.user}
          events={this.state.events}
        />


      </div>
    )
  }
}

export default ScheduleR