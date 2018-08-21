import React, { Component } from 'react'

class EventForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addEvent(this.state.body)
    this.setState({ body: ''})
    this.props.history.push('/Schedule')
    
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
            placeholder="Enter Event..."
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


export default EventForm