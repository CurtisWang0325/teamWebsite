import React, { Component } from 'react'
import base from '../base'
import MemberR from './MemberR'

class TeamPageR extends Component {
    state = {
        users: {},
        showIns: false,
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

    showOrHideIns = () => {
        this.setState({ showIns: !this.state.showIns })
    }


    render() {
        return (
            <div>
                <h1>TEAM INFO</h1>

                <button type='button' onClick={this.showOrHideIns} title='show/hide the instruction'>
                    Show/Hide
                </button>
                {
                    this.state.showIns ?
                        <span>
                            <h4>
                                This page shows the information about LOL team mebers in Rose-Hulman
                                <br/>
                                If you want to be part of the team, contact Manager wangc6@rose-hulman.edu
                            </h4>
                            <hr />
                        </span>
                        :
                        null
                }
                
                <h3>Manager:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'admin')
                        .map(member => (
                            <MemberR member={member} />
                        ))
                }
                <br />

                <h3>Member:</h3>
                {
                    this.getUserArray()
                        .filter(member => member.level == 'member')
                        .map(member => (
                            <MemberR member={member} />
                        ))
                }
                <br />




            </div>
        )
    }
}

export default TeamPageR