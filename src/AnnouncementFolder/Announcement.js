import React, { Component } from 'react'
import AnnouncementLists from './AnnouncementLists'
import AnnouncementForm from './AnnouncementForm'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'
import moment from 'moment'

class Announcement extends Component {
  constructor() {
    super()

    this.state = {
      announcements: [],
    }
  }

  componentDidMount() {
    base.syncState('announcements', {
      context: this,
      state: 'announcements',
      asArray: true,
    })
  }

  addAnnouncement = (body) => {
    const announcements = [...this.state.announcements]
    announcements.push({
      t: moment().get('year')+" "+ (moment().get('month')+1) +"/"+ moment().get('date'),
      // user: this.props.user,
      body,
    })
    this.setState({ announcements })
    // window.alert('Announcement Added Successfully')
  }

  deleteAnnouncement = (t) => {
    const announcements = [...this.state.announcements]
    announcements.splice(announcements.indexOf(announcements.find((a) => a.t === t)), 1)
    this.setState({ announcements })
  }

  render() {
    return (

      <div className="Announcements">
        <h4>announcements</h4>
        <Route exact path="/Announcement"
          render={prop=>(
            <NavLink to="Announcement/new">
              <button type='button' title='show/hide the form'>
                <i className="fas fa-plus"></i>
              </button>
            </NavLink>
          )}
        />

        <AnnouncementLists
          ann={this.state.announcements}
          deleteAnnouncement={this.deleteAnnouncement}
        />
        
        <Route path="/Announcement/new"
          render={props=>(
            <AnnouncementForm addAnnouncement={this.addAnnouncement} {...props} />
          )}
        />

      </div>
    )
  }
}

export default Announcement