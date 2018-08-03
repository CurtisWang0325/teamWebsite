import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCgF9Ug2nQaaeSqm23y3BBiOprUST1Go5M",
  authDomain: "teamapp-8aa0b.firebaseapp.com",
  databaseURL: "https://teamapp-8aa0b.firebaseio.com",
  projectId: "teamapp-8aa0b",
  storageBucket: "",
  messagingSenderId: "29490059924"
};
const app = firebase.initializeApp(config)
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
const db = app.database()

export default Rebase.createClass(db)