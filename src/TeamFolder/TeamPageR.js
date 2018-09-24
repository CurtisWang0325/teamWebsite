import React, { Component } from 'react'
import base from '../base'
import Member from './Member'

class TeamPageR extends Component {
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
        
            
            <h3>Admin:</h3>
            {
                this.state.users
                    .filter(member=>member.level=='admin')
                    .map(member => (
                        <Member member={member}/>
                    ))
            }
            <br/>

            <h3>Member:</h3>
            {
                this.state.users
                    .filter(member=>member.level=='member')
                    .map(member => (
                        <Member member={member}/>
                    ))
            }
            <br/>



        </div>
    )
  }
}

export default TeamPageR