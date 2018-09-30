import React, { Component } from 'react'
import { Route, } from 'react-router-dom'
import Main from './Main'


class Forum extends Component {


    render() {
        return (
            <div>
                <Route
                    path="/Forum/:roomName"
                    render={navProps => (
                        <Main
                            user={this.props.user}
                            {...navProps}
                        />
                    )}
                />
            </div>
        )
    }
}

export default Forum