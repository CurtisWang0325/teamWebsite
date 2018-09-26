import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {

    findEventIndex = (key) => {
        const index = this.props.events.findIndex(evt => evt.key == key);
        return index
    }
    render() {

        return (
            <div className="eventList">
            <h2>Available</h2>
            {
                this.props.events
                    .filter(event=>event.status==='opened')
                    .map(a => (
                        <Event
                            user={this.props.user}
                            status={a.status}
                            txt={a.body}
                            eventTime={a.eventTime}
                            deleteEvent={this.props.deleteEvent}
                            level={a.level}
                            index={this.findEventIndex(a.key)}
                        />
                    ))
            }

            <h2>Confirmed</h2>
            {
                this.props.events
                    .filter(event=>event.status==='confirmed')
                    .map(a => (
                        <Event
                            user={this.props.user}
                            status={a.status}
                            txt={a.body}
                            eventTime={a.eventTime}
                            deleteEvent={this.props.deleteEvent}
                            level={a.level}
                            index={this.findEventIndex(a.key)}
                        />
                    ))
            }

            <h2>Unavailable</h2>
            {
                this.props.events
                    .filter(event=>event.status==='over'||event.status==='cancelled')
                    .map(a => (
                        <Event
                            user={this.props.user}
                            status={a.status}
                            txt={a.body}
                            eventTime={a.eventTime}
                            deleteEvent={this.props.deleteEvent}
                            level={a.level}
                            index={this.findEventIndex(a.key)}
                        />
                    ))
            }

        </div>
     
        )
    }

}

export default EventList