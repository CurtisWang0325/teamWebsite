import React, { Component } from 'react'

class EventForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
      eventTime:'',

    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addEvent(this.state)
    this.setState(
      { body: '',
        eventTime :'',  
      }
    )
    this.props.history.push('/Schedule')
    
  }

  
  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
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
          <input
            type="text"
            name="eventTime"
            placeholder="Enter Event Time"
            value={this.state.eventTime}
            onChange={this.handleChange}
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