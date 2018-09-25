import React, { Component } from 'react'
require("../css/teamPage.css")
class Member extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         level: this.props.member.level,
    //     }
    // }
    state = {
        level: this.props.member.level,
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    handleSubmit = (ev) => {
        console.log('submit')
        this.props.handleChangeLevel(this.props.member.uid, this.state.level)
    }
    render() {
        const user = this.props.member
        return (
            <div className="member">
                <h1>
                    {user.name}
                </h1>
                <p>IGN: {user.IGN}</p>
                <p>Position: {user.position}</p>
                <p>Year: {user.year}</p>
                <p>Email:{user.email}</p>
                <p>{user.aboutMe}</p>
                <hr />

                <select
                    name="level"
                    value={this.state.level}
                    onChange={this.handleChange}
                >
                    <option value="player">PLAYER</option>
                    <option value="member">MEMBER</option>
                    <option value="admin">ADMIN</option>
                </select>

                <button type='button' onClick={this.handleSubmit}>
                    Save
                </button>
            </div>

        )
    }

}


export default Member