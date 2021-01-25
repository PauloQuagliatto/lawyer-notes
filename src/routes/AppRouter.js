import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LogPage from '../components/LogPage'
import NotesDashboardPage from '../components/NotesDashboardPage'
import CreateNotePage from '../components/CreateNotePage'
import EditNotePage from '../components/EditNotePage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export let history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <PublicRoute path="/" component={LogPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={NotesDashboardPage} />
            <PrivateRoute path="/create" component={CreateNotePage} />
            <PrivateRoute path="/edit/:id" component={EditNotePage} />
            <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
)

export default AppRouter