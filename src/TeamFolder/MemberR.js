import React, { Component } from 'react'
require("../css/teamPage.css")
class MemberR extends Component {
    render() {
        const user = this.props.member
        return (
            <div className="member">
                <h1>
                    {user.name}
                </h1>
                <p>IGN: {user.IGN}</p>
                <p>Position: {user.position}</p>
                <p>Rank:{user.rank}</p>
                <p>Email:{user.email}</p>
                <p className="aboutMe">{user.aboutMe}</p>
                <hr />
            </div>

        )
    }

}


export default MemberR