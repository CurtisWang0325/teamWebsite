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



    getUserArray() {
        var users = []
        for (var user in this.state.users) {
            users.push(this.state.users[user])
        }
        return users
    }

    handleChangeLevel = (uid, level) => {
        var newUsers = this.state.users;
        console.log(newUsers)
        for (var user in newUsers) {

            if (newUsers[user].uid == uid) {
                console.log('changing')
                newUsers[user].level = level
                // user.level=level
            }

        }

        this.setState({ users: newUsers })
        // console.log(this.state.users)
        return
    }

    render() {
        return (
            <div>
                <h1>TEAM INFO</h1>

                <h3>Manager:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'admin')
                        .map(member => (
                            <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                        ))
                }
                <br />

                <h3>Member:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'member')
                        .map(member => (
                            <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                        ))
                }
                <br />

                <h3>Player:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'player')
                        .map(member => (
                            <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                        ))
                }
                <br />

            </div>
        )
    }
}

export default TeamPage