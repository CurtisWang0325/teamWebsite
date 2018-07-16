import React, { Component } from 'react'
import Forum from './Forum'
import Schedule from './Schedule'
import Announcement from './Announcement'

class Main extends Component {
    render(){
        return (
            <div className="Main">
            <Announcement/>
            <Forum/>
            <Schedule/>
            </div>
            
        )
    }
}
export default Main