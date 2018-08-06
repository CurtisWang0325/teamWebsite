import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'

const RoomLink = ({ room }) => {
  return (
    <li className={css(styles.item)}>
      <NavLink
        to={`/Forum/${room.name}`}
        className={css(styles.link)}
      >
        {room.displayName}
      </NavLink>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
})

export default RoomLink