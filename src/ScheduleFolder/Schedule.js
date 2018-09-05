import React, { Component } from 'react'
import EventList from './EventList'
import EventForm from './EventForm'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'


class Schedule extends Component {
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

  addEvent = (newEvent) => {
    const events = [...this.state.events]
    events.push(newEvent)
    this.setState({ events })
    // window.alert('Announcement Added Successfully')
  }

  deleteEvent = (t) => {
    const events = [...this.state.events]
    events.splice(events.indexOf(events.find((a) => a.t === t)), 1)
    this.setState({ events })
  }

  render() {
    return (

      <div className="Schedule">
        <h4>Events</h4>
        <Route exact path="/Schedule"
          render={prop=>(
            <NavLink to="Schedule/new">
              <button type='button' title='add an event'>
                <i className="fas fa-plus"></i>
              </button>
            </NavLink>
          )}
        />

        <EventList
          user={this.props.user}
          events={this.state.events}
          deleteEvent={this.deleteEvent}
        />
        
        <Route path="/Schedule/new"
          render={props=>(
            <EventForm addEvent={this.addEvent} {...props} />
          )}
        />

      </div>
    )
  }
}

export default Schedule