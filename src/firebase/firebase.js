import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { addNote, removeNote, editNote } from '../actions/notes'

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

database.ref('notes').on('child_added', (snapshot, dispatch) => {
    return dispatch(addNote({
        id: snapshot.key,
        ...snapshot
      }))
})

database.ref('notes').on('child_removed', (snapshot, dispatch) => {
    return dispatch(removeNote({ id: snapshot.key }))
})

database.ref('notes').on('child_changed', (snapshot, dispatch) => {
    return dispatch(editNote({
        id: snapshot.key,
        ...snapshot
      }))
})

export { firebase, database as default }