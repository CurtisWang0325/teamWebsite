import React, { Component } from 'react'

class AnnouncementForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addAnnouncement(this.state.body)
    this.setState(
      {
        body: '',
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
        id="newAnn"
      >

        <textarea
          name="body"
          placeholder="Type a new annoucement..."
          rows='3'
          cols='50'
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