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
    announcements.unshift({
      t: moment().get('year') + " " + (moment().get('month') + 1) + "/" + moment().get('date'),
      body,
      createTime: Date.now(),
    })
    this.setState({ announcements })
  }

  deleteAnnouncement = (createTime) => {
    const announcements = [...this.state.announcements]
    console.log(createTime)
    console.log(announcements.findIndex((a) => a.createTime === createTime))
    announcements.splice(announcements.findIndex((a) => a.createTime === createTime), 1)
    this.setState({ announcements })
  }

  render() {
    return (

      <div className="Announcements">
        <h1>ANNOUCNEMENTS</h1>
        <Route exact path="/Announcement"
          render={prop => (
            <NavLink to="Announcement/new">
              <button type='button' title='show/hide the form'>
                <i className="fas fa-plus fa-2x"></i>
              </button>
            </NavLink>
          )}
        />
        <Route path="/Announcement/new"
                 render={props => (
                     <AnnouncementForm addAnnouncement={this.addAnnouncement} {...props} />
                 )}
        />

        <AnnouncementLists
          ann={this.state.announcements}
          deleteAnnouncement={this.deleteAnnouncement}
        />


      </div>
    )
  }
}

export default Announcement