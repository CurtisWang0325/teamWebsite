import React, { Component } from 'react'
import PlayerList from './PlayerList'
import base from '../base'

class Event extends Component {
  state = {
    players: {},
    status: 'open',
    //status: passed, confirmed, opened, cancelled
  }
  getPlayerArray() {
    var playerArray = []
    for (var pos in this.state.players) {
      playerArray.push(this.state.players[pos].user)
    }
    return playerArray
  }


  handleAddPlayer = (pos, user) => {
    if (user.IGN==='Not set yet'){
      window.alert("Set your IGN in my accountpage before signing up")
      return
    }
    if (this.state.status !== 'opened') {
      window.alert("This event is unavailable now!")
      return
    }
    if (this.props.level === 'player' && !(user.level === 'member' || user.level === 'admin' || user.level === 'player')) {
      window.alert("You have to sign in to register for this event")
      return
    }
    if (this.props.level === 'member' && !(user.level === 'member' || user.level === 'admin')) {
      window.alert("You have to be a team member for this event! ")
      return
    }
    if (this.getPlayerArray().findIndex(p=>p.IGN===user.IGN)!==-1){
      window.alert("You have signed up for another position")
      return
    }
    var result = window.confirm(`Join event: ${this.props.txt} at ${this.props.eventTime}?`)
    if (!result) {
      return
    }
    const players = this.state.players
    players[pos] = { user };
    this.setState({ players })
  }


  componentDidMount() {
    base.syncState(`events/${this.props.index}/players`, {
      context: this,
      state: 'players',
    })
    base.syncState(`events/${this.props.index}/status`, {
      context: this,
      state: 'status',
    })

  }



  render() {
    return (

      <div className="events">
        <h2 className="eventName">
          {this.props.txt}
        </h2>
        <h4>
          Time:  {this.props.eventTime}
        </h4>
        <h4>Status:  {this.props.status}      Level:  {this.props.level}</h4>
        <PlayerList
          user={this.props.user}
          handleAddPlayer={this.handleAddPlayer}
          players={this.state.players}
        />
      </div>

    )
  }

}





export default Event