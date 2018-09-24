import React, { Component } from 'react'
import base from '../base'
import Member from './Member'

class TeamPage extends Component {
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

    handleChangeLevel(uid,level){
        var newUsers=this.state.users
        for (var user in newUsers){
            console.log(user.uid)
           if(user.uid===uid){
                user.level=level
                console.log(user)
                break
           }
        }

        this.setState({users:newUsers})
        return
    }

    render() {
        return (
            <div>
                <h1>This is the team description</h1>
                <hr />

                 <h3>Manager:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'admin')
                        .map(member => (
                            <Member member={member} handleChangeLevel={this.handleChangeLevel}/>
                        ))
                }
            <br />

            <h3>Member:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'member')
                        .map(member => (
                            <Member member={member} handleChangeLevel={this.handleChangeLevel}/>
                        ))
                }
            <br />

            </div>
        )
    }
}

export default TeamPage