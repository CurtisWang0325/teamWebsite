import React, { Component } from 'react'
import { NavLink, Route, } from 'react-router-dom'
//import AccountInfo from './AccountInfo'

class MyAccountPage extends Component {
    state = {
        tempName: "",
        tempIGN:"",
    }


    handleChange = (ev) => {
       this.setState({ [ev.target.name]: ev.target.value });
    }

    handleSubmit = (ev) => {
        const user=this.props.user
        //user.name=this.state.tempName
        user.name=this.state.tempName||user.name
        user.IGN=this.state.tempIGN||user.IGN
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

                
                <h1>Name: </h1>
                <h1>IGN: </h1>
                
                <Route exact path="/MyAccountPage"
                    render={prop => (
                        <div>
                            <p>{`${this.props.user.name ? this.props.user.name : this.props.user.googleName}`}</p>
                            <p>{`${this.props.user.IGN}`}</p>
                        </div>
                    )}
                />
                <Route path="/MyAccountPage/editMode"
                    render={prop => (
                        <form onSubmit={(ev) => ev.preventDefault()}>
                            <div>
                                {/* <p>Prefered Name:</p> */}
                                <input
                                    type="text"
                                    name="tempName"
                                    placeholder={`${this.props.user.name ? this.props.user.name : this.props.user.googleName}`}
                                    value={this.state.tempName}
                                    onChange={this.handleChange}
                                />
                                <hr/>
                                <input
                                    type="text"
                                    name="tempIGN"
                                    placeholder={`${this.props.user.IGN ? this.props.user.IGN : "Enter your in game name"}`}
                                    value={this.state.tempIGN}
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