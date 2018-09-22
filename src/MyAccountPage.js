import React, { Component } from 'react'
import { NavLink, Route, } from 'react-router-dom'
//import AccountInfo from './AccountInfo'

class MyAccountPage extends Component {
    state = {
        tempName:"",
        tempIGN:"",
        tempPosition:"",
        tempYear:"",
        tempAboutMe:"",
        tempLevel:"",
    }


    handleChange = (ev) => {
       this.setState({ [ev.target.name]: ev.target.value });
    }

    handleSubmit = (ev) => {
        const user=this.props.user
        user.name=this.state.tempName||user.name
        user.IGN=this.state.tempIGN||user.IGN
        user.position=this.state.tempPosition||user.position
        user.year=this.state.tempYear||user.year
        user.aboutMe=this.state.tempAboutMe||user.aboutMe
        user.level=this.state.tempLevel||user.level
        this.props.changeAccountInfo(user)
    }

    render() {
        return (
            <span>
                <NavLink to="/MyAccountPage/editMode">
                    <button>Edit</button>
                </NavLink>

                {/* <AccountInfo 
                    title="IGN"
                    user={this.props.user} 
                    changeAccountInfo={this.props.changeAccountInfo}
                    handleChange={this.handleChange}
                /> */}

                <h1>Level: </h1>
                <h1>Name: </h1>
                <h1>IGN: </h1>
                <h1>Position: </h1>
                <h1>Year: </h1>
                <h1>About Me: </h1>
                
                <Route exact path="/MyAccountPage"
                    render={prop => (
                        <div>
                            <p>{`${this.props.user.level}`}</p>
                            <p>{`${this.props.user.name}`}</p>
                            <p>{`${this.props.user.IGN}`}</p>
                            <p>{`${this.props.user.position}`}</p>
                            <p>{`${this.props.user.year}`}</p>
                            <p>{`${this.props.user.aboutMe}`}</p>

                        </div>
                    )}
                />
                <Route path="/MyAccountPage/editMode"
                    render={prop => (
                        <form onSubmit={(ev) => ev.preventDefault()}>
                            <div>


                                <select
                                    name="tempLevel" 
                                    value={this.state.tempLevel} 
                                    onChange={this.handleChange}
                                >
                                    <option value="visitor">VISITOR</option>
                                    <option value="player">PLAYER</option>
                                    <option value="member">MEMBER</option>
                                    <option value="admin">ADMIN</option>
                                </select>
                                
                                <hr/>
                                <input
                                    type="text"
                                    name="tempName"
                                    placeholder={`${this.props.user.name}`}
                                    value={this.state.tempName}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                <input
                                    type="text"
                                    name="tempIGN"
                                    placeholder={`${this.props.user.IGN}`}
                                    value={this.state.tempIGN}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                <input
                                    type="text"
                                    name="tempPosition"
                                    placeholder={`${this.props.user.position}`}
                                    value={this.state.tempPosition}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                <input
                                    type="number"
                                    min="1"
                                    max="6"
                                    name="tempYear"
                                    placeholder={`${this.props.user.year}`}
                                    value={this.state.tempYear}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                {/* Need a larger space for input */}
                                <textarea
                                    name="tempAboutMe"
                                    rows="5"
                                    cols="50    "
                                    placeholder={`${this.props.user.aboutMe}`}
                                    value={this.state.tempAboutMe}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                <NavLink to="/MyAccountPage">
                                    <button type="button" onClick={this.handleSubmit}>Save Change</button>
                                </NavLink>
                            </div>
                        </form>
                    )}
                />
            </span>


        )
    }
}

export default MyAccountPage