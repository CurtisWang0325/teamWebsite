import React, { Component } from 'react'


class Event extends Component {
  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteEvent(this.props.t)
  }

  render() {
    return (

      <span>
        <p>
          {this.props.txt}
        </p>
        <button type='button' onClick={this.handleDelete}>
          <i className="fas fa-minus" title='delete'></i>
        </button>
        <hr />
      </span>

    )
  }

}





export default Event