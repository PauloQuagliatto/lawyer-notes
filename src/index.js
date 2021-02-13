import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routes/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startSetNotes, addNote, removeNote, editNote } from './actions/notes'
import { login, logout } from './actions/auth'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { firebase } from './firebase/firebase'


const store = configureStore()
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetNotes()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

firebase.database().ref('notes').on('child_added', (snapshot) => {
  if(checkIfInStore(snapshot.key)){
    const note = {
      id: snapshot.key,
      ...snapshot
    }
    store.dispatch(addNote(note))
  } else {
    return
  }
})

firebase.database().ref('notes').on('child_removed', (snapshot) => {
  const id = snapshot.key
  if(checkIfInStore(id)){
    store.dispatch(removeNote({ id }))
  }else{
    return
  }
})

firebase.database().ref('notes').on('child_changed', (snapshot) => {
  if(checkIfInStore(snapshot.key)) {
    store.dispatch(editNote(snapshot.key, ...snapshot))
  }else{
    return
  }
})

const checkIfInStore = (id) => {
  let isNotInStore = false
  store.notes.forEach((note) => {
    if(note.id === id){
      isNotInStore = true
      return false
    }
  })
  return isNotInStore
}