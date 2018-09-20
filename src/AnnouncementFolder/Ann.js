import React, { Component } from 'react'
import Moment from 'moment'

class Ann extends Component {
  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteAnnouncement(this.props.t)
  }

  render() {
    return (

      <span>
        <h3>
          {this.props.txt}
        </h3>
        <p>
          {this.props.t}
        </p>
        
        <button type='button' onClick={this.handleDelete}>
          <i className="fas fa-minus" title='delete'></i>
        </button>
        <hr />
      </span>

    )
  }

}





export default Ann