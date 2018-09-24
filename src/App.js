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
// import { FirebaseDatabase } from '@firebase/database-types';
import TeamPage from './TeamFolder/TeamPage'
import TeamPageR from './TeamFolder/TeamPageR'



class App extends Component {
  state = {
    user: {},
    rebaseBinding: null,

  }
  
  componentDidMount() {
    // if(this.signedIn()){
    //   var user=this.state.user
    //   if(!user.name){user.name=user.googleName}
    //   if(!user.level){user.level='player'}
    //   if(!user.IGN){user.IGN='Not set yet'}
    //   if(!user.position){user.position='Not set yet'}
    //   if(!user.year){user.year='0'}
    //   if(!user.aboutMe){user.aboutMe='Not set yet'}
    //   this.setState({user})
    // }
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
    

    // const user = {
    //   uid: oauthUser.uid,
    //   googleName: oauthUser.displayName,
    //   email: oauthUser.email,
    //   // photoUrl: oauthUser.photoURL,
    //   // IGN: '',
    //   // name: '',
    // }
    
    // const userRef=base.database().ref(`users/${user.uid}`)
    // userRef.once("value")
    // .then(function(snapshot){
    //   this.name = snapshot.child("name").val()
    // })
    // console.log(this.name)
    console.log(oauthUser.uid)
    const rebaseBinding  = base.syncState(`users/${oauthUser.uid}`, {
      context: this,
      state: 'user',
      defaultValue: 
        {
          uid:oauthUser.uid,
          name:oauthUser.displayName,
          IGN:'Not set yet',
          position:'Not set yet',
          year:'0',
          aboutMe:'Not set yet',
          level:'player',
        },
    })
    // if(!user.name){user.name=user.googleName}
    // if(!user.level){user.level='player'}
    // if(!user.IGN){user.IGN='Not set yet'}
    // if(!user.position){user.position='Not set yet'}
    // if(!user.year){user.year='0'}
    // if(!user.aboutMe){user.aboutMe='Not set yet'}

    this.setState({ rebaseBinding })
    // localStorage.setItem('user', JSON.stringify(user))
  }

  handleUnauth = () => {
    // localStorage.removeItem('user')
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
          <Route path="/Announcement" 
            render={prop => (
              this.state.user.level=='admin'?
              <Announcement/>
              :
              <AnnouncementR/>
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
              this.state.user.level=='admin'?
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
              this.state.user.level=='admin'?
              <TeamPage
                user={this.state.user}
              />
              :
              <TeamPageR
                user={this.state.user}
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
