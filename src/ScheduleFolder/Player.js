import React, { Component } from 'react'

class Player extends Component {
    render() {
        const player=this.props.player
        return (
            <div>
                {player.name}
                {player.IGN}

            </div>
        )
    }
 

}





export default Player