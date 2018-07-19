import React, { Component } from 'react'
//import { StyleSheet, css } from 'aphrodite'

class AnnouncementForm extends Component {
  
  constructor() {
    super()
    this.state = {
      body: '',
    }
  }
  

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addAnnouncement(this.state.body)
    this.setState({ body: '' })
    this.props.changeForm()
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      this.props.show?
      <form
      //  className={`AnnouncementForm ${css(styles.form)}`}
        onSubmit={this.handleSubmit}
      >
        
        <input
          type="text"
          name="body"
          placeholder="Type a new annoucement..."
          value={this.state.body}
          onChange={this.handleChange}
          autoFocus
          //className={css(styles.input)}
        />
        <button type="submit" 
        //className={css(styles.button)}
        >
          <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
      :null
    )
  }
}

// const styles = StyleSheet.create({
//   form: {
//     backgroundColor: 'white',
//     height: '3rem',
//     display: 'flex',
//     alignItems: 'stretch',
//     border: '2px solid #999',
//     borderRadius: '0.5rem',
//     margin: '0.25rem',
//     padding: 0,
//   },

//   icon: {
//     display: 'flex',
//     borderRadius: '0.5rem',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     color: '#ccc',
//     padding: '0 0.5rem',
//     fontSize: '1.2rem',
//   },

//   input: {
//     flex: 1,
//     fontSize: '1.2rem',
//     border: 0,

//     ':focus': {
//       outline: 0,
//     },
//   },

//   button: {
//     fontSize: '1.5rem',
//     backgroundColor: '#1A8FE3',
//     color: 'white',
//     paddingLeft: '1rem',
//     paddingRight: '1rem',
//     borderTopRightRadius: '0.5rem',
//     borderBottomRightRadius: '0.5rem',
//     border: '1px solid white',
//   },
// })

export default AnnouncementForm