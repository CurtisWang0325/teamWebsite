import React, { Component } from 'react'
import base from '../base'
import Member from './Member'

class TeamPage extends Component {
    state = {
        users: [],
    }
  

  componentDidMount() {
    base.syncState('users', {
      context: this,
      state: 'users',
      asArray: true,
    })
  }


  render() {
    return (
        <div>
            <h1>This is the team description</h1>
            <hr/>
        
            <p>team page</p>
            {
                this.state.users
                    .filter(member=>member.level=='player'||member.level=='member'||member.level=='admin')
                    .map(member => (
                        <Member member={member}/>
                    ))
            }


        </div>
    )
  }
}

export default TeamPage