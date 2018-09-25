import React, { Component } from 'react'
import EventList from './EventList'
import EventForm from './EventForm'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'
require('../css/Schedule.css')

class Schedule extends Component {
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

  addEvent = (newEvent) => {
    const events = [...this.state.events]
    events.push(newEvent)
    this.setState({ events })
  }

  deleteEvent = (index) => {
    const events = [...this.state.events]
    events.splice(index, 1)
    this.setState({ events })
  }

  showOrHideIns = () => {
    this.setState({ showIns: !this.state.showIns })
  }

  render() {
    return (
      <div className="Schedule">
         <h1 className="scheduleTitle">Recent Event</h1>
         <Route exact path="/Schedule"
                 render={prop => (
                     <NavLink to="Schedule/new">
                         <button type='button' title='add an event'>
                             <i className="fas fa-plus fa-2x"></i>
                         </button>
                     </NavLink>
                 )}
         />
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
         <Route path="/Schedule/new"
                 render={props => (
                     <EventForm addEvent={this.addEvent} {...props} />
                 )}
         />
        <EventList
          user={this.props.user}
          events={this.state.events}
          deleteEvent={this.deleteEvent}
        />

      </div>
    )
  }
}

export default Schedule