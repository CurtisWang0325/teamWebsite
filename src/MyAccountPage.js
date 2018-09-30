import React, { Component } from 'react'
import { NavLink, Route, } from 'react-router-dom'
require('./css/myAccountPage.css')

class MyAccountPage extends Component {
    state = {
        tempName: "",
        tempIGN: "",
        tempPosition: "",
        tempYear: "",
        tempAboutMe: "",
        tempLevel: "",
        tempEmail:"",
        tempRank:"",
    }


    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    handleSubmit = (ev) => {
        var user = this.props.user
        user.name = this.state.tempName || user.name
        user.IGN = this.state.tempIGN || user.IGN
        user.position = this.state.tempPosition || user.position
        user.year = this.state.tempYear || user.year
        user.rank = this.state.tempRank || user.rank
        user.aboutMe = this.state.tempAboutMe || user.aboutMe
        user.level = this.state.tempLevel || user.level
        user.email = this.state.tempEmail || user.email
        this.props.changeAccountInfo(user)
    }

    render() {
        return (
            <span id="account_page">
                <Route exact path="/MyAccountPage"
                    render={prop => (
                        <div id="account_page_bgi">
                            <div id="container">
                                <div className="block">
                                    <h1>Level: </h1>
                                    <p>{`${this.props.user.level}`}</p>
                                </div>
                                <div className="block">
                                    <h1>Name: </h1>
                                    <p>{`${this.props.user.name}`}</p>
                                </div>
                                <div className="block">
                                    <h1>IGN: </h1>
                                    <p>{`${this.props.user.IGN}`}</p>
                                </div>
                                <div className="block">
                                    <h1>Email: </h1>
                                    <p>{`${this.props.user.email}`}</p>
                                </div>
                                <div className="block">
                                    <h1>Position: </h1>
                                    <p>{`${this.props.user.position}`}</p>
                                </div>
                                <div className="block">
                                    <h1>Year: </h1>
                                    <p>{`${this.props.user.year}`}</p>
                                </div>
                                <div className="block">
                                    <h1>Rank: </h1>
                                    <p>{`${this.props.user.rank}`}</p>
                                </div>
                                <div className="block about_block">
                                    <h1>About Me: </h1>
                                    <p>{`${this.props.user.aboutMe}`}</p>
                                </div>
                                <div className="block">
                                    <NavLink to="/MyAccountPage/editMode">
                                        <button>Edit</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                />
                <Route path="/MyAccountPage/editMode"
                    render={prop => (
                        <form onSubmit={(ev) => ev.preventDefault()}>
                            <div id="account_page_bgi">
                                <div id="container">
                                    <div className="block">
                                        <h1>Level: </h1>
                                        <select
                                            name="tempLevel"
                                            value={this.state.tempLevel}
                                            onChange={this.handleChange}
                                        >
                                            <option value="player">PLAYER</option>
                                            <option value="member">MEMBER</option>
                                            <option value="admin">ADMIN</option>
                                        </select>
                                    </div>
                                    <div className="block">
                                        <h1>Name: </h1>
                                        <input
                                            type="text"
                                            className="input"
                                            name="tempName"
                                            placeholder={`${this.props.user.name}`}
                                            value={this.state.tempName}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <h1>IGN: </h1>
                                        <input
                                            className="input"
                                            type="text"
                                            name="tempIGN"
                                            placeholder={`${this.props.user.IGN}`}
                                            value={this.state.tempIGN}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <h1>Email: </h1>
                                        <input
                                            className="input"
                                            type="email"
                                            name="tempEmail"
                                            placeholder={`${this.props.user.email}`}
                                            value={this.state.tempEmail}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <h1>Position: </h1>
                                        <input
                                            type="text"
                                            className="input"
                                            name="tempPosition"
                                            placeholder={`${this.props.user.position}`}
                                            value={this.state.tempPosition}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <h1>Year: </h1>
                                        <input
                                            type="number"
                                            className="input"
                                            min="1"
                                            max="6"
                                            name="tempYear"
                                            placeholder={`${this.props.user.year}`}
                                            value={this.state.tempYear}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <h1>Rank: </h1>
                                        <input
                                            type="text"
                                            className="input"
                                            name="tempRank"
                                            placeholder={`${this.props.user.rank}`}
                                            value={this.state.tempRank}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="textarea_block">
                                        <h1>About Me: </h1>
                                        <hr />
                                        <textarea
                                            name="tempAboutMe"
                                            rows="5"
                                            cols="50"
                                            placeholder={`${this.props.user.aboutMe}`}
                                            value={this.state.tempAboutMe}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="block">
                                        <NavLink to="/MyAccountPage">
                                            <button type="button" onClick={this.handleSubmit}>Save Change</button>
                                        </NavLink>
                                    </div>
                            </div>
                            </div>
                        </form>
                    )}
                />
            </span>


        )
    }
}

export default MyAccountPage