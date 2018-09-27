import React, { Component } from 'react'
require("../css/announce.css")

class AnnR extends Component {
  render() {
    return (

      <div className="ann">
        <p>
          {this.props.t}
        </p>
        <h3>
          {this.props.txt}
        </h3>
      </div>
    )
  }

}



export default AnnR