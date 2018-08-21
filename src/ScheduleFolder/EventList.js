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
                                t={a.t}
                                txt={a.body}
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