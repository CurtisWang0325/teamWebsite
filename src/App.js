import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './Main'
import { auth } from './base'
import Heading from './Heading'
import { Route, Switch} from  'react-router-dom'
import MyAccount from './MyAccount'



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
    const user = {
      uid: oauthUser.uid,
      displayName: oauthUser.displayName,
      email: oauthUser.email,
      photoUrl: oauthUser.photoURL,
    }
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }
  
  signOut = () => {
    auth.signOut()

  }
    

    
  render() {
    return (
      <div className="App">
        <Heading
          user={this.state.user}
          signOut={this.signOut}
          signedIn={this.signedIn}
        />
        <hr/>

        <Switch>
          <Route path="/myAccount" component={MyAccount}/>
          <Route
            render={()=>(
              <Main/>
            )}
          />
          

          
        </Switch>


        
      </div>
    );
  }
}

export default App;
