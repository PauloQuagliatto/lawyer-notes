import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectNotes from '../selectors/notes'
import LazyDocButton from './LazyDocButton'
import LazyResumeButton from './LazyResumeButton'

const NotesSummary = ({ visibleNotes, notesCount }) => {
    const noteWord = notesCount === 1 ? 'Cliente' : 'Clientes'

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Vendo <span>{notesCount} {noteWord}</span></h1>
                <div className="page-header__actions">
                    <Link className="btn" to="/create">Adicionar Ação</Link>
                    <div>
                        <LazyDocButton notes={visibleNotes} />
                        <LazyResumeButton notes={visibleNotes} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    const visibleNotes = selectNotes(state.notes, state.filters)

    return {
        visibleNotes,
        notesTotal: visibleNotes.length,
        notesCount: visibleNotes.length
    }
}

export default connect(mapStateToProps)(NotesSummary)