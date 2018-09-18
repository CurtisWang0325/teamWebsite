import React, { Component } from 'react'
import Event from './Event'

class EventList extends Component {

    findEventIndex = (key) => {
        const index = this.props.events.findIndex(evt => evt.key == key);
        return index
    }
    render() {

        return (
            <div>
                {
                    this.props.events
                        .map(a => (
                            <Event 
                                user={this.props.user}
                                // t={a.t}
                                txt={a.body}
                                eventTime={a.eventTime}
                                deleteEvent={this.props.deleteEvent} 
                                // key={a.key}
                                index={this.findEventIndex(a.key)} 
                                // players={this.props.players}
                            />
                        ))
                }

            </div>
        )
    }

}

export default EventList