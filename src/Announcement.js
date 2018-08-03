import React, { Component } from 'react'
import AnnouncementLists from './AnnouncementLists'
import AnnouncementForm from './AnnouncementForm'
import base from './base'


class Announcement extends Component {
  constructor() {
    super()

    this.state = {
      announcements: [],
      form: false,
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
      t: Date.now(),
      // user: this.props.user,
      body,
    })

    this.setState({ announcements })
  }

  deleteAnnouncement = (t) => {
    const announcements = [...this.state.announcements]
    announcements.splice(announcements.indexOf(announcements.find((a) => a.t === t)), 1)
    this.setState({ announcements })
  }


  changeForm = () => {
    this.state.form ?
      this.setState({ form: false }) :
      this.setState({ form: true })
  }




  render() {
    return (

      <div className="Announcements">
        <h4>announcements</h4>
        <button type='button' onClick={this.changeForm} title='show/hide the form'>
          <i className="fas fa-plus"></i>
        </button>
        <AnnouncementLists
          ann={this.state.announcements}
          deleteAnnouncement={this.deleteAnnouncement}
        />
        <AnnouncementForm addAnnouncement={this.addAnnouncement} changeForm={this.changeForm} show={this.state.form} />
      </div>


    )
  }
}

export default Announcement