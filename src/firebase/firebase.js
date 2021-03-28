import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: xxxxx,
    authDomain: xxxx,
    databaseURL: xxxxx,
    projectId: xxxxx,
    storageBucket: xxxxx,
    messagingSenderId: xxxx,
    appId: xxxxx,
    measurementId: xxxxxx
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
