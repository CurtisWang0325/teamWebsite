import React, {Component} from 'react'
import AnnouncementLists from './AnnouncementLists'

class Announcement extends Component {
    render() {
        return (
            <div>                
            <h1>Announcement!</h1>
            <AnnouncementLists/>
            </div>
        )
    }
}

export default Announcement