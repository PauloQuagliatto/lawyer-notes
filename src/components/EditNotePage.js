import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { startEditNote, startRemoveNote } from '../actions/notes'

class EditNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.dispatch(startEditNote(this.props.note.id, note))
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.dispatch(startRemoveNote({id:this.props.note.id}))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div className="page-header"> 
          <div className="content-container">
            <h1 className="page-header__title">Edite a Ação</h1> 
          </div>
        </div>
        <div className="content-container">
          <NoteForm
            note={this.props.note} 
            onSubmit={this.onSubmit}
          />
        <button className="btn btn--secondary" onClick={this.onRemove}>Excluir</button>
        </div>
      </div>
    )}
}

const mapStateToProps = (state, props) => {
  return{
    note: state.notes.find((note) => note.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditNotePage)