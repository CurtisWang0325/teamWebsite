import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch, Link } from 'react-router-dom'

import RoomLink from './RoomLink'
import RoomForm from './RoomForm'

class RoomList extends Component {
  render() {
    const rooms = this.props.rooms

    return (
      <Switch>
        <Route
          path="/Forum/new"
          render={
            navProps => (
              <RoomForm
                addRoom={this.props.addRoom}
                user={this.props.user}
                {...navProps}
              />
            )
          }
        />
        <Route
          render={
            () => (
              <nav
                className={`RoomList ${css(styles.nav)}`}
              >
                <div className={css(styles.heading)}>
                  <h2 className={css(styles.h2)}>
                    Rooms
                  </h2>
                  <Link
                    className={css(styles.button)}
                    to="/Forum/new"
                  >
                    <i className="fas fa-plus-circle" title="Add room"></i>
                  </Link>
                </div>
                <ul className={css(styles.list)}>
                  {
                    Object.keys(rooms).map(roomName => (
                      <RoomLink
                        key={roomName}
                        room={rooms[roomName]}
                      />
                    ))
                  }
                </ul>
              </nav>
            )
          }
        />
      </Switch>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.4)',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})

export default RoomList