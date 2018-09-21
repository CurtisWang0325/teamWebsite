import React, { Component } from 'react'
import base from '../base'
import { NavLink, Route } from 'react-router-dom'


class TeamPage extends Component {
    state = {
        users: [],
    }
  

  componentDidMount() {
    base.syncState('users', {
      context: this,
      state: 'users',
      asArray: true,
    })
  }


  render() {
    return (
        <div>
            <p>team page</p>
        </div>
    )
  }
}

export default TeamPage