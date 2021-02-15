import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { startRemoveNote } from '../actions/notes'
import editIcon from '../assets/images/icons/edit.svg'
import trashIcon from '../assets/images/icons/trash.svg'

const NoteListItem = (props) => {
    const onRemove = () => {
        props.dispatch(startRemoveNote({ id: props.id }))
    }
    return (
        <div className="list-item">
            <div>
                <h3 className="list-item__title">{props.client}</h3>
                <span className="list-item__sub-title">{moment(props.createdAt).format('DD/MM/YYYY')}</span>
            </div>
            <div className="content-container__icon">
                <h3 className="list-item__data">{props.process}</h3>
                <div className="icon-container">
                    <Link to={`/edit/${props.id}`} className="is-active">
                        <img
                            className="icon-small"
                            alt="edit icon"
                            src={editIcon}
                        />
                    </Link>
                </div>
                <div className="icon-container">
                    <img
                        className="icon-small icon-small--btn"
                        alt="trash icon"
                        src={trashIcon}
                        onClick={onRemove}
                    />
                </div>
            </div>
        </div>
    )
}


export default connect()(NoteListItem)