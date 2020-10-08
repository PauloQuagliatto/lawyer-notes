import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { startRemoveNote } from '../actions/notes'

class NoteListItem extends React.Component {
    onRemove = () => {
        this.props.dispatch(startRemoveNote({ id: this.props.id}))
    }
    render(){
        return (
            <div className="list-item">
                <div>
                    <h3 className="list-item__title">{this.props.client}</h3>
                    <span className="list-item__sub-title">{moment(this.props.createdAt).format('DD/MM/YYYY')}</span>
                </div>
                <div className="content-container__icon">
                    <h3 className="list-item__data">{this.props.process}</h3>
                    <div className="icon-container">
                        <Link to={`/edit/${this.props.id}`} className="is-active">
                            <img 
                            className="icon-small" 
                            alt="edit icon" 
                            src="images/icons/edit.svg" 
                            />
                        </Link>
                    </div>
                    <div className="icon-container">
                        <img 
                        className="icon-small icon-small--btn" 
                        alt="trash icon" 
                        src="images/icons/trash.svg" 
                        onClick={this.onRemove}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NoteListItem)