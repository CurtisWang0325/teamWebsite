import React, {Component} from 'react'
import AnnouncementLists from './AnnouncementLists'
import AnnouncementForm from './AnnouncementForm'
//import base from './base'


class Announcement extends Component {
    constructor() {
        super()
    
        this.state = {
          announcements: [],
         // rebaseBinding: null,
        }
      }
    
    //   componentDidMount() {
    //     this.syncMessages()
    //   }
    
    // //   componentDidUpdate(prevProps) {
    // //     if (prevProps.room.name !== this.props.room.name) {
    // //       this.syncMessages()
    // //     }
    // //   }
    
    //   syncMessages = () => {
    //     // Stop syncing with the current endpoint
    //     if (this.state.rebaseBinding) {
    //       base.removeBinding(this.state.rebaseBinding)
    //     }
    
    //     // sync with the new endpoint
    //     const rebaseBinding = base.syncState(`${this.props.room.name}/messages`, {
    //       context: this,
    //       state: 'messages',
    //       asArray: true,
    //     })
    
    //     this.setState({ rebaseBinding })
    //   }
    
      addAnnouncement = (body) => {
        const announcements = [...this.state.announcements]
        announcements.push({
          id: Date.now(),
          user: this.props.user,
          body,
        })
    
        this.setState({ announcements })
      }
    
      render() {
        return (
          <div className="Announcements">
            <AnnouncementLists
              ann={this.state.announcements}
            />
            <AnnouncementForm addAnnouncement={this.addAnnouncement} />
          </div>
        )
      }
}

export default Announcement