import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Doc from './Doc'
import ResumedDoc from './ResumedDoc'
import selectNotes from '../selectors/notes'

const NotesSummary = ({ visibleNotes, notesCount }) => {
    const noteWord = notesCount === 1 ? 'Ação' : 'Ações'

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Vendo <span>{notesCount} {noteWord}</span></h1>
                <div className="page-header__actions">
                    <Link className="btn" to="/create">Adicionar Ação</Link>
                    <div>
                        <PDFDownloadLink className="btn btn--terciary give-space" 
                            document={<ResumedDoc notes={visibleNotes} />} fileName="relatorio resumido.pdf">
                            {({ blob, url, loading, error }) => 
                            (loading ? 'Carregando Relatório...' : 'Gerar Relatório Resumido')}
                        </PDFDownloadLink>
                        <PDFDownloadLink className="btn btn--terciary" 
                            document={<Doc notes={visibleNotes} />} fileName="relatorio.pdf">
                            {({ blob, url, loading, error }) => 
                            (loading ? 'Carregando Relatório...' : 'Gerar Relatório')}
                        </PDFDownloadLink>
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