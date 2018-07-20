import React, { Component } from 'react'
import Forum from './Forum'
import Schedule from './Schedule'
import Announcement from './Announcement'
import Heading from './Heading'

class Main extends Component {
    render(){
        return (
            <div className="Main">
            <Heading
                user={this.props.user}
                signOut={this.props.signOut}
            />
            <hr/>
            <Announcement/>
            <hr/>
            <Forum/>
            <hr/>
            <Schedule/>
            </div>
            
        )
    }
}
export default Main