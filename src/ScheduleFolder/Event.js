import React, { Component } from 'react'
import PlayerList from './PlayerList'
import base from '../base'

class Event extends Component {
  state = {
    players:{},
    eventTime:'',
  }

  handleDelete = (ev) => {
    ev.preventDefault()
    this.props.deleteEvent(this.props.key)
  }

  handleAddPlayer = (pos,user) => {
    const players=this.state.players
    players[pos]={user};
    this.setState({players})
  }

  componentDidMount() {
    base.syncState(`events/${this.props.index}/players`,{
      context:this,
      state:'players',
      // asArray:true,
    })
  }



  render() {
    return (

      <span>
        <p>
          Description:{this.props.txt}
        </p>
        <p>
          Time:{this.props.eventTime}
        </p>
        <PlayerList
          players={this.state.players}
          user={this.props.user}
          handleAddPlayer={this.handleAddPlayer}
        />
        <button type='button' onClick={this.handleDelete}>
          <i className="fas fa-minus" title='delete'></i>
        </button>
        <hr />
      </span>

    )
  }

}





export default Event