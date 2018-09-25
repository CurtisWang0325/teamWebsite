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
              <h2>
                Sign up the event 2 days before the event time!
                <br />
                You can only sign up for one position!
                <br />
                Please be on time if the event is confirmed!
                <br />
                The event might be cancelled, check out accordingly!
              </h2>
              <hr />
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