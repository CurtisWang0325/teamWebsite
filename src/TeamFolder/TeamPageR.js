import React, {Component} from 'react'
import base from '../base'
import MemberR from './MemberR'

require("../css/teamPage.css")

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
        this.setState({showIns: !this.state.showIns})
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
                        <div className="members_list">                         {
                            this.getUserArray()
                                .filter(member => member.level === 'admin')
                                .map(member => (
                                    <MemberR key={member.key} member={member}
                                             handleChangeLevel={this.handleChangeLevel}/>
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
                                        <MemberR key={member.key} member={member}
                                                 handleChangeLevel={this.handleChangeLevel}/>
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
                                        <MemberR key={member.key} member={member} handleChangeLevel={this.handleChangeLevel} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamPageR