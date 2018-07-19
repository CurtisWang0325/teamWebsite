import React, {Component} from 'react'
import AnnouncementLists from './AnnouncementLists'
import AnnouncementForm from './AnnouncementForm'
//import base from './base'


class Announcement extends Component {
    constructor() {
        super()
    
        this.state = {
          announcements: [],
          form:false,
        }
      }

      addAnnouncement = (body) => {
        const announcements = [...this.state.announcements]
        announcements.push({
          id: Date.now(),
          user: this.props.user,
          body,
        })
    
        this.setState({ announcements })
      }

      
      changeForm =()=>{
        this.state.form?
        this.setState({form:false}):
        this.setState({form:true})
      }
      

      
    
      render() {
        return (
          
          <div className="Announcements">
            <h4>announcements</h4>
            <button onClick={this.changeForm} title='show/hide the form'>
              <i class="fas fa-plus"></i>
            </button>
            <AnnouncementLists
              ann={this.state.announcements}
            />
            <AnnouncementForm addAnnouncement={this.addAnnouncement} changeForm={this.changeForm} show={this.state.form}/>
          </div>
         
           
        )
      }
}

export default Announcement