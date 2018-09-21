import React, { Component } from 'react'
import PlayerList from './PlayerList'
import base from '../base'

class Event extends Component {
  state = {
    players:{},
    status:'open',
    //status: passed, confirmed, opened, cancelled
  }


  handleAddPlayer = (pos,user) => {
    if (this.state.status!='opened'){
      window.alert("This event is unavailable now!")
      return
    }
    if (user.level<this.props.level){
      window.alert("You have to be level "+this.props.level+" for this event! ")
      return
    }
    var result=window.confirm(`Join event: ${this.props.txt} at ${this.props.eventTime}?`)
    if (!result){
      return
    }
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
    base.syncState(`events/${this.props.index}/status`,{
      context:this,
      state:'status',
      // asArray:true,
    })
   
  }



  render() {
    return (

      <span>
        <h2>
          {/* Title/Description*/}
          {this.props.txt}
        </h2>
        <h4>
          Time:{this.props.eventTime}
        </h4>
        <h4>Status:{this.props.status}</h4>
        <h4>Level:{this.props.level}</h4>

        <PlayerList
          user={this.props.user}
          handleAddPlayer={this.handleAddPlayer}

          players={this.state.players}
        />

        <hr />
      </span>

    )
  }

}





export default Event