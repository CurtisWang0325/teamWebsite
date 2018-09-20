import React, { Component } from 'react'
// import moment from 'moment'

class AnnouncementForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
      // time:'',
    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addAnnouncement(this.state.body)
    this.setState(
      { body: '',
        // time: moment.now().toString,
        // time:'111',
        // format('D MMM @ h:mm a'),
      }
    
    )
    this.props.history.push('/Announcement')
    
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
        <form
          onSubmit={this.handleSubmit}
        >

          <input
            type="text"
            name="body"
            placeholder="Type a new annoucement..."
            value={this.state.body}
            onChange={this.handleChange}
            autoFocus
          />

          <button type="submit"
          >
            <i className="far fa-paper-plane" title="Send"></i>
          </button>
          
        </form>
    )
  }
}


export default AnnouncementForm