import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/App.css';
import MainPage from './MainPage'
import { auth, googleProvider } from './base'
import Heading from './Heading'
import { Route, Switch } from 'react-router-dom'
import MyAccountPage from './MyAccountPage'
import Announcement from './AnnouncementFolder/Announcement'
import Forum from './ForumFolder/Forum'
import Schedule from './Schedule'
import Account from './Account'
import base from './base'




class App extends Component {
  state = {
    user: {},
  }
  
  componentDidMount() {

    // const user = JSON.parse(localStorage.getItem('user'))
    // if (user) {
    //   // this.setState({ user })
    //   console.log("going to sync")
      
  
    // }

    auth.onAuthStateChanged(
      user => {
        
        if (user) {
          // we signed in
          this.handleAuth(user)
        } else {
          // we signed out
          this.handleUnauth()
        }
      }
      // this.setState
    )
    
  }


  signedIn = () => {
    return this.state.user.uid
  }

  handleAuth = (oauthUser) => {
    const user = {
      uid: oauthUser.uid,
      googleName: oauthUser.displayName,
      email: oauthUser.email,
      photoUrl: oauthUser.photoURL,
      IGN: '',
      name: '',
    }
    this.ref = base.syncState(`users/${user.uid}`, {
      context: this,
      state: 'user',
      defaultValue: `users/${user.uid}`,
    })
    this.setState({ user })
    // localStorage.setItem('user', JSON.stringify(user))
  }

  handleUnauth = () => {
    // localStorage.removeItem('user')
    base.removeBinding(this.ref)
    this.setState({ user: {} })
  }

  signIn = () => {
    auth.signInWithPopup(googleProvider)
  }

  signOut = () => {
    auth.signOut()
  }

  changeAccountInfo = (newUser) => {
    this.setState({ user:newUser})
  }

  

  render() {
    return (
      <div className="App">
        <Account
          user={this.state.user}
          signOut={this.signOut}
          signIn={this.signIn}
          signedIn={this.signedIn}
        />
        <hr />
        <Heading />
        <hr id="header_baseline" />
        <Switch>
          <Route path="/myAccountPage"
            render={prop => (
              <MyAccountPage
                user={this.state.user}
                changeAccountInfo={this.changeAccountInfo}
              />
            )}
          />
          <Route path="/Announcement" component={Announcement} />
          <Route path="/Forum"
            render={prop => (
              <Forum
                user={this.state.user}

              />
            )}
          />
          <Route path="/Schedule" component={Schedule} />
          <Route
            render={() => (
              <MainPage />
            )}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
