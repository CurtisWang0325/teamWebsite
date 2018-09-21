import React, { Component } from 'react'
import EventR from './EventR'

class EventListR extends Component {

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
                            <EventR 
                                user={this.props.user}
                                status={a.status}
                                txt={a.body}
                                eventTime={a.eventTime}
                                level={a.level}
                                index={this.findEventIndex(a.key)} 
                            />
                        ))
                }

            </div>
        )
    }

}

export default EventListR