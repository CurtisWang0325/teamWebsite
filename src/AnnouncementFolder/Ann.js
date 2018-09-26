import React, { Component } from 'react'
import Moment from 'moment'

class Ann extends Component {
  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteAnnouncement(this.props.createTime)
  }

  render() {
    return (

      <div className="ann">

        <p>
          {this.props.t}
        </p>
        <h3>
              {this.props.txt}
        </h3>
        <button type='button' onClick={this.handleDelete}>
          <i className="fas fa-minus" title='delete'></i>
        </button>
        <hr />
      </div>

    )
  }

}





export default Ann