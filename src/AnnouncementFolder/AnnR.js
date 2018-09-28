import React, { Component } from 'react'
require("../css/announce.css")

class AnnR extends Component {
  render() {
    return (

      <div className="ann">

        <h3>
          {this.props.txt}
        </h3>
          <p>
              {this.props.t}
          </p>
      </div>
    )
  }

}



export default AnnR