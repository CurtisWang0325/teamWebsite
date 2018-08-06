import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './Main'


class Forum extends Component {
    

    render() {
        return (
            <div>
                <Route
                    path="/Forum/:roomName"
                    render={navProps => (
                        this.props.user.uid?
                        <Main
                        user={this.props.user}
                        {...navProps}
                        />
                        :
                        <h1>Sign in to view the forum</h1>
                    )}
                />
            </div>
        )
    }
}

export default Forum