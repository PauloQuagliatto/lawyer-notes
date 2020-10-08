import React from 'react'
import { connect } from 'react-redux'
import NoteListItem from './NoteListItem'
import selectNotes from '../selectors/notes'

const NoteList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Clientes</div>
            <div className="show-for-desktop">Cliente</div>
            <div className="content-container__icon">
                <div className="show-for-desktop">Ação</div>
                <div className="icon-container icon-small" />
                <div className="icon-container icon-small" />
            </div>
        </div>
        <div className="list-body">
            {
                props.notes.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>Sem Ações</span>
                    </div>
                ) : (
                    props.notes.map((note) => {
                        return <NoteListItem key={note.id} {...note}/>
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state)=>{
    return { notes: selectNotes(state.notes, state.filters) }
}

export default connect(mapStateToProps)(NoteList)