import React, { Component } from 'react'
import Ann from './Ann'

class AnnouncementLists extends Component {
    render() {

        return (
            <div>
                {
                    this.props.ann
                        .map(a => (
                            <Ann t={a.t} txt={a.body} deleteAnnouncement={this.props.deleteAnnouncement} key={a.t} />
                        ))
                }

            </div>
        )
    }

}

export default AnnouncementLists