import React, { Component } from 'react'

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
            <div>
                <h1>
                    {user.name}
                </h1>
                <h4>IGN: {user.IGN}</h4>
                <h4>Position: {user.position}</h4>
                <h4>Year: {user.year}</h4>
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