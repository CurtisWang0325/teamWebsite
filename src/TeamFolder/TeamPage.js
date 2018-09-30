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
            // <div id="teamInfo">
            //     <div id="teamInfoTitle">
            //         <h1>TEAM INFO</h1>
            //         <div onClick={this.showOrHideIns}>
            //             <i className={"fa fa-question-circle fa-2x"}>
            //             </i>
            //         </div>
            //         {
            //             this.state.showIns ?
            //                 <p>
            //                     * This page shows the information about LOL team mebers in Rose-Hulman
            //                     <br />
            //                     * If you want to be part of the team, contact Manager wangc6@rose-hulman.edu
            //                     <br/>
            //                     * Make sure your information is correct, especially if you want to join the team
            //                 </p>
            //                 :
            //                 null
            //         }
            //     </div>
            //     <div id="members">
            //         <div className="team_block">
            //             <h3>Manager:</h3>
            //             {
            //                 this.getUserArray()
            //                     .filter(member => member.level === 'admin')
            //                     .map(member => (
            //                         <Member member={member} handleChangeLevel={this.handleChangeLevel} />
            //                     ))
            //             }
            //             <br />
            //         </div>
            //         <div className="team_block">
            //             <h3>Member:</h3>
            //             {
            //                 this.getUserArray()
            //                     .filter(member => member.level === 'member')
            //                     .map(member => (
            //                         <Member member={member} handleChangeLevel={this.handleChangeLevel} />
            //                     ))
            //             }
            //             <br />
            //         </div>
            //         <div className="team_block">
            //             <h3>Player:</h3>
            //             {
            //                 this.getUserArray()
            //                     .filter(member => member.level === 'player')
            //                     .map(member => (
            //                         <Member member={member} handleChangeLevel={this.handleChangeLevel} />
            //                     ))
            //             }
            //             <br />
            //         </div>
            //     </div>
            // </div>
            <div className='temp'>
                <h1>
                    OPEN SOON
                </h1>
            </div>
        )
    }
}

export default TeamPage