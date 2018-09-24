import React, { Component } from 'react'
import base from '../base'
import MemberR from './MemberR'

class TeamPageR extends Component {
    state = {
        users: {},
    }
  

  componentDidMount() {
    base.syncState('users', {
      context: this,
      state: 'users',
    })
  }

  getUserArray(){
      var users=[]
      for (var user in this.state.users){
          users.push(this.state.users[user])          
      }
      return users
  }


  render() {
    return (
        <div>
            <h1>This is the team description</h1>
            <hr/>
        
            
            <h3>Manager:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'admin')
                        .map(member => (
                            <MemberR member={member}/>
                        ))
                }
            <br />

            <h3>Member:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'member')
                        .map(member => (
                            <MemberR member={member}/>
                        ))
                }
            <br />




        </div>
    )
  }
}

export default TeamPageR