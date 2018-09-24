import React, { Component } from 'react'


class AnnR extends Component {
  render() {
    return (

      <span>
        <h3>
          {this.props.txt}
        </h3>
        <p>
          {this.props.t}
        </p>
      </span>

    )
  }

}



export default AnnR