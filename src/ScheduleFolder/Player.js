import React, { Component } from 'react'
require('../css/Schedule.css')
class Player extends Component {
    render() {
        const player=this.props.player
        return (
            <div className="player">
                {`${player.name}        ${player.IGN}`}
            </div>
        )
    }
 

}





export default Player