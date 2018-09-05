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
                            TOP
                        </button>
                    </li>
                    <li>
                        <button name= 'jungle' type='button' onClick={this.handleClick}>
                            JUNGLE
                        </button>
                    </li>
                    <li>
                        <button name= 'mid' type='button' onClick={this.handleClick}>
                            MID
                        </button>
                    </li>
                    <li>
                        <button name= 'adc' type='button' onClick={this.handleClick}>
                            ADC
                        </button>
                    </li>
                    <li>
                        <button name= 'sup' type='button' onClick={this.handleClick}>
                            SUP
                        </button>
                    </li>
                </ul>
            </div>
        )
    }

}





export default PlayerList