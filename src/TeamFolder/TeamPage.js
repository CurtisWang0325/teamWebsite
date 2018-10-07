import React, { Component } from 'react'
import base from '../base'
import Member from './Member'
require("../css/teamPage.css")


class TeamPage extends Component {
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

    handleChangeLevel = (uid, level) => {
        var newUsers = this.state.users;
        for (var user in newUsers) {
            if (newUsers[user].uid === uid) {
                newUsers[user].level = level
            }

        }
        this.setState({ users: newUsers })
        return
    }

    render() {
        return (
            <div id="teamInfo">
                <div id="teamInfoTitle">
                    <h1>TEAM INFO</h1>
                </div>
                <div id="members">
                    <div className="team_block">
                        <h3>Manager:</h3>
                        <div className="members_list">
                            {
                                this.getUserArray()
                                    .filter(member => member.level === 'admin')
                                    .map(member => (
                                        <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                                    ))
                            }
                        </div>
                    </div>
                    <div className="team_block">
                        <h3>Member:</h3>
                        <div className="members_list">
                            {
                                this.getUserArray()
                                    .filter(member => member.level === 'member')
                                    .map(member => (
                                        <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                                    ))
                            }
                        </div>
                    </div>
                    <div className="team_block">
                        <h3>Player:</h3>
                        <div className="members_list">
                            {
                                this.getUserArray()
                                    .filter(member => member.level === 'player')
                                    .map(member => (
                                        <Member member={member} handleChangeLevel={this.handleChangeLevel} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamPage