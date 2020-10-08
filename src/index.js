import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routes/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startSetNotes } from './actions/notes'
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
  if(!hasRendered){
    ReactDOM.render(app, document.getElementById('root'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetNotes()).then(() => {
      renderApp()
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
