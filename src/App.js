import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import { auth } from './base'
import Heading from './Heading'
import { Route, Switch } from 'react-router-dom'
import MyAccountPage from './MyAccountPage'
import Announcement from './Announcement'
import Forum from './Forum'
import Schedule from './Schedule'
import Account from './Account'
import base from './base'




class App extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.setState({ user })
    }

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
    const googleUser = {
      uid: oauthUser.uid,
      googleName: oauthUser.displayName,
      email: oauthUser.email,
      photoUrl: oauthUser.photoURL,
    }
    this.ref=base.syncState(`${googleUser.uid}`,{
      context:this, 
      state:'user',
    })
    //this.setState({ user:googleUser })
    localStorage.setItem('user', JSON.stringify(this.state.user))
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  signOut = () => {
    auth.signOut()
    base.removeBinding(this.ref)
  }

  changeName =(newName) => {
    const user=this.state.user
    user.name=newName

    this.setState({user})
  }

  render() {
    return (
      <div className="App">
        <Account
          user={this.state.user}
          signOut={this.signOut}
          signedIn={this.signedIn}
        />
        <hr />
        <Heading />
        <hr />

        <Switch>
          <Route path="/myAccountPage"
            render={prop => (
              <MyAccountPage
                user={this.state.user}
                changeName={this.changeName}
              />
            )}
          />
          <Route path="/Announcement" component={Announcement} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Sche  dule" component={Schedule} />

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
