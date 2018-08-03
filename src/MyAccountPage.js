import React, { Component } from 'react'
import { NavLink, Route, } from 'react-router-dom'
import AccountInfo from './AccountInfo'

class MyAccountPage extends Component {
    state = {
        tempName: "",
    }

    handleChange = (ev) => {
        this.setState({ tempName: ev.target.value })
    }

    handleSubmit = (ev) => {
        const user=this.props.user
        user.name=this.state.tempName
        this.props.changeAccountInfo(user)
    }

    render() {
        return (
            <span>
                <NavLink to="/MyAccountPage/editMode">
                    <button>Edit</button>
                </NavLink>

                <AccountInfo title="Name"/>
                <h1>Name: </h1>
                <Route exact path="/MyAccountPage"
                    render={prop => (
                        <p>{`${this.props.user.name ? this.props.user.name : this.props.user.googleName}`}</p>
                    )}
                />
                <Route path="/MyAccountPage/editMode"
                    render={prop => (
                        <form onSubmit={(ev) => ev.preventDefault()}>
                            <div>
                                {/* <p>Prefered Name:</p> */}
                                <input
                                    type="text"
                                    placeholder={`${this.props.user.name ? this.props.user.name : this.props.user.googleName}`}
                                    value={this.state.tempName}
                                    onChange={this.handleChange}
                                />
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