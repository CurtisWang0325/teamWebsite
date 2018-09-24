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
import Schedule from './ScheduleFolder/Schedule'
import ScheduleR from './ScheduleFolder/ScheduleR'
import Account from './Account'
import base from './base'
import AnnouncementR from './AnnouncementFolder/AnnouncementR';
import TeamPage from './TeamFolder/TeamPage'
import TeamPageR from './TeamFolder/TeamPageR'



class App extends Component {
  state = {
    user: {},
    rebaseBinding: null,
  }

  componentDidMount() {
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
    )

  }


  signedIn = () => {
    return this.state.user.uid
  }

  handleAuth = (oauthUser) => {
    console.log(oauthUser.uid)
    const rebaseBinding = base.syncState(`users/${oauthUser.uid}`, {
      context: this,
      state: 'user',
      defaultValue:
        {
          uid: oauthUser.uid,
          name: oauthUser.displayName,
          IGN: 'Not set yet',
          position: 'Not set yet',
          year: '0',
          aboutMe: 'Not set yet',
          level: 'player',
        },
    })
    this.setState({ rebaseBinding })
  }

  handleUnauth = () => {
    base.removeBinding(this.state.rebaseBinding)
    this.setState({ user: {} })
  }

  signIn = () => {
    auth.signInWithPopup(googleProvider)
  }

  signOut = () => {
    auth.signOut()
  }

  changeAccountInfo = (newUser) => {
    this.setState({ user: newUser })
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
          <Route path="/Announcement"
            render={prop => (
              this.state.user.level == 'admin' ?
                <Announcement />
                :
                <AnnouncementR />
            )}
          />
          <Route path="/Forum"
            render={prop => (
              <Forum
                user={this.state.user}

              />
            )}
          />
          <Route path="/Schedule"
            render={prop => (
              this.state.user.level == 'admin' ?
                <Schedule
                  user={this.state.user}
                />
                :
                <ScheduleR
                  user={this.state.user}
                />
            )}
          />
          <Route path="/TeamPage"
            render={prop => (
              this.state.user.level == 'admin' ?
                <TeamPage
                />
                :
                <TeamPageR
                />
            )}
          />
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
