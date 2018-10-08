import React, { Component } from 'react'
import Player from './Player'
require('../css/Schedule.css')
class PlayerListR extends Component {

    handleClick = (ev) => {
        this.props.handleAddPlayer(ev.target.name, this.props.user)
    }


    render() {

        return (
            <div className="playerLists">
                <ul>
                    <li>
                        <h4>TOP:</h4>
                        {this.props.players.top ?
                            <Player player={this.props.players.top.user} />
                            :
                            <button name='top' type='button' onClick={this.handleClick}>
                                SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>JUN:</h4>
                        {this.props.players.jun ?
                            <Player player={this.props.players.jun.user} />
                            :
                            <button name='jun' type='button' onClick={this.handleClick}>
                                SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>MID:</h4>
                        {this.props.players.mid ?
                            <Player player={this.props.players.mid.user} />
                            :
                            <button name='mid' type='button' onClick={this.handleClick}>
                                SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>ADC:</h4>
                        {this.props.players.adc ?
                            <Player player={this.props.players.adc.user} />
                            :
                            <button name='adc' type='button' onClick={this.handleClick}>
                                SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>SUP:</h4>
                        {this.props.players.sup ?
                            <Player player={this.props.players.sup.user} />
                            :
                            <button name='sup' type='button' onClick={this.handleClick}>
                                SIGN UP
                        </button>
                        }
                    </li>
                </ul>
            </div>
        )
    }

}





export default PlayerListR