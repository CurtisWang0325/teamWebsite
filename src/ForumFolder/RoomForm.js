import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
// import Select from 'react-select'
// import 'react-select/dist/react-select.css'

class RoomForm extends Component {
  state = {
    room: {
        name: '',
        description: '',
    },
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
    this.props.history.push(`/Forum/${this.state.room.name}`)
  }

  handleChange = (ev) => {
    const room = {...this.state.room}
    const target = ev.target
    const value = target.value

    room[target.name] = value
    this.setState({ room })
  }

  // handleSelectChange = (selectedValue) => {
  //   const room = {...this.state.room}
  //   room.members = selectedValue
  //   this.setState({ room })

  //   console.log(selectedValue)
  // }

  
  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}>Create a room</h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
           
            <p>
              <label htmlFor="name" className={css(styles.label)}>
                Room Name
              </label>
              <input
                type="text"
                name="name"
                value={this.state.room.name}
                className={css(styles.input, styles.textInput)}
                onChange={this.handleChange}
                autoFocus
              />
            </p>
            <p>
              <label htmlFor="description" className={css(styles.label)}>
                Description
              </label>
              <input
                type="text"
                name="description"
                value={this.state.room.description}
                className={css(styles.input, styles.textInput)}
                onChange={this.handleChange}
              />
            </p>

         
            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.history.goBack}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css(styles.button)}
              >
                Create Room
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f6f6f6',
  },

  title: {
    color: '#ff3344',
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  textInput: {
    width: '20rem',
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
  },

  cancel: {
    backgroundColor: 'white',
    color: '#666',
  },
})

export default RoomForm