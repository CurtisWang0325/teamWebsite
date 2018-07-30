import React, {Component} from 'react'

class MyAccountPage extends Component {
    render() {
        return (
            <h1>{`Name: ${this.props.user.googleName}`}</h1>
        )
    }
}

export default MyAccountPage