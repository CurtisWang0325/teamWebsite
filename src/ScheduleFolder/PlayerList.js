import React, { Component } from 'react'

class PlayerList extends Component {

    handleClick = (ev) => {
        // console.log(this.props.user)
        // pos=[ev  .target.name]
        this.props.handleAddPlayer(ev.target.name,this.props.user)
    }

    render() {
        return (
            <div>
                <p>Player:</p>
                <ul>
                    <li>
                        <button name='top' type='button' onClick={this.handleClick}>
                            Top
                        </button>
                    </li>
                    <li>
                        <button type='jungle' onClick={this.handleClick}>
                            Jungle
                        </button>
                    </li>
                </ul>
            </div>
        )
    }

}





export default PlayerList