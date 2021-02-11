import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAzNZ0PNkGiEHzrwLw6xVO818ZPyf7okDM',
    authDomain: 'lawyer-notes.firebaseapp.com',
    databaseURL: 'https://lawyer-notes.firebaseio.com',
    projectId: 'lawyer-notes',
    storageBucket: 'lawyer-notes.appspot.com',
    messagingSenderId: '1051679270484',
    appId: '1:1051679270484:web:80d7499dad394d9c802fc1',
    measurementId: 'G-9JP66Q4NJY'
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }