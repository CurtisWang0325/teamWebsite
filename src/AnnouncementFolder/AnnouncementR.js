import React, { Component } from 'react'
import AnnouncementListsR from './AnnouncementListsR'
import base from '../base'

class AnnouncementR extends Component {
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