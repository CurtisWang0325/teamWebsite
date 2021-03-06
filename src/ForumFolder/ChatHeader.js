import React from 'react'

const ChatHeader = ({ user, room, removeRoom }) => {
  const handleClick = (ev) => {
    if (window.confirm('Leave the room?')) {
      removeRoom(room)
    }
  }


  return (
    <div className="ChatHeader" style={styles.header}>
      <div className="roomInfo">
        <h2 style={styles.h2}>
          #{room.displayName}
        </h2>
        <p style={styles.p}>
          {room.description}
        </p>
      </div>
      {
        user.level === 'admin'
        &&
        <button
          style={styles.button}
          onClick={handleClick}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      }
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: '#f3f3f3',
    color: '#6B6B6B',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  h2: {
    fontSize: '1.1rem',
    marginTop: '0.3rem',
  },

  p: {
    color: '#6B6B6B',
    marginTop: '0.3rem',
    fontSize: '0.8rem',
  },

  button: {
    border: 0,
    outline: 0,
    padding: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'rgba(0,0,0, 0.4)',
    fontSize: '1rem',
  },
}

export default ChatHeader