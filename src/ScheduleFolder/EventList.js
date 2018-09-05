import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {
    render() {

        return (
            <div>
                {
                    this.props.events
                        .map(a => (
                            <Event 
                                user={this.props.user}
                                t={a.t}
                                txt={a.body}
                                eventTime={a.eventTime}
                                deleteEvent={this.props.deleteEvent} 
                                key={a.t} 
                            />
                        ))
                }

            </div>
        )
    }

}

export default EventList