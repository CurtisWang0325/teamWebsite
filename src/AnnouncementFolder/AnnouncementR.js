import React, { Component } from 'react'
import AnnouncementListsR from './AnnouncementListsR'
// import AnnouncementForm from './AnnouncementForm'
import base from '../base'
// import { NavLink, Route } from 'react-router-dom'


class AnnouncementR extends Component {
  constructor() {
    super()

    this.state = {
      announcements: [],
     // form: false,
    }
  }

  componentDidMount() {
    base.syncState('announcements', {
      context: this,
      state: 'announcements',
      asArray: true,
    })
  }

  render() {
    return (

      <div className="Announcements">
        <h4>announcements</h4>
        
        <AnnouncementListsR
          ann={this.state.announcements}
        />

      </div>
    )
  }
}

export default AnnouncementR