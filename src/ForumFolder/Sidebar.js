import React from 'react'

import RoomList from './RoomList'

const Sidebar = ({ user, signOut, users, rooms, addRoom }) => {
  return (
    <aside
      className="Sidebar"
      style={styles.sidebar}
    >
      {/* <UserInfo
        user={user}
        signOut={signOut}
      /> */}
      <h1 style={styles.h1}>Forum</h1>
      <RoomList
        users={users}
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
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}

export default Sidebar