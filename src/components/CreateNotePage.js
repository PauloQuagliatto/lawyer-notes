import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { startAddNote } from '../actions/notes'

class CreateNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.startAddNote(note)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <div className="page-header"> 
          <div className="content-container">
            <h1 className="page-header__title">Cadastre o Cliente</h1> 
          </div>
        </div>
        <div className="content-container">
          <NoteForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note))
})

export default connect(undefined, mapDispatchToProps)(CreateNotePage)