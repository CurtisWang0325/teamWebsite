import React from 'react'

import RoomList from './RoomList'
require('../css/Forum.css')

const Sidebar = ({ user, rooms, addRoom }) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      <h1 style={styles.h1}>Forum</h1>
      <RoomList
        user={user}
        rooms={rooms}
        addRoom={addRoom}
      />

    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  h1: {
    color: 'white',
    fontSize: '1.8rem',
    marginTop: 0,
    padding: '0 1rem',
    borderBottom:'1px solid white',
  },
}

export default Sidebar