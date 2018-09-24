import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class MessageForm extends Component {
  state = {
    body: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    (this.props.user.level == 'admin' || this.props.user.level == 'member' || this.props.user.level == 'player') ?
      this.props.addMessage(this.state.body)
      :
      window.alert("Sign in to chat! ")
    this.setState({ body: '' })
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      <form
        className={`MessageForm ${css(styles.form)}`}
        onSubmit={this.handleSubmit}
      >
        <div className={css(styles.icon)}>
          <i className="fas fa-comment-alt"></i>
        </div>
        <input
          required
          type="text"
          name="body"
          placeholder="Type a message..."
          autoFocus
          value={this.state.body}
          onChange={this.handleChange}
          className={css(styles.input)}
        />
        <button type="submit" className={css(styles.button)}>Send</button>
      </form>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0,
  },

  icon: {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#ccc',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
  },

  input: {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,

    ':focus': {
      outline: 0,
    },
  },

  button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  },
})

export default MessageForm