import React, { Component } from 'react'
import Ann from './Ann'

class AnnouncementLists extends Component {
    render() {

        return (
            <div className="annList">
                {
                    this.props.ann
                        .map(a => (
                            <Ann t={a.t} txt={a.body} deleteAnnouncement={this.props.deleteAnnouncement} createTime={a.createTime} />
                        ))
                }

            </div>
        )
    }

}

export default AnnouncementLists