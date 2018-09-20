import React, { Component } from 'react'

class EventForm extends Component {

  constructor() {
    super()
    this.state = {
      body: '',
      eventTime:'',
      players:{},
      // key:Date.now(),
      status:'opened',
    }
  }


  handleSubmit = (ev) => {
    ev.preventDefault()
    // this.setState({key:Date.now})
    this.props.addEvent(this.state)
    this.setState(
      { body: '',
        eventTime :'',  
        players:{},
        key:'',
        status:'',
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
          <select
            name="status" 
            value={this.state.status} 
            onChange={this.handleChange}
          >
            <option value="opened">OPENED</option>
            <option value="closed">CLOSED</option>
            <option value="cancelled">CANCELLED</option>
            <option value="confirmed">CONFIRMED</option>
          </select>

          <button type="submit"
          >
            <i className="far fa-paper-plane" title="Send"></i>
          </button>
          
        </form>
    )
  }
}


export default EventForm