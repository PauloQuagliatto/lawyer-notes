import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { wipeandReSetNotes } from '../actions/notes'
import refreshImage from '../assets/images/reload-button.png'

const Header = ({ startLogout, wipeandReSetNotes }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Notas do Advogado</h1>
        </Link>
        <div className="header__buttons">
          <button className="btn__refresh"
            style={{
              background: `url(${refreshImage})`,
              backgroundSize: 'cover'
            }} onClick={wipeandReSetNotes}>
          </button>
          <button className="btn btn--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: dispatch(startLogout),
  wipeandReSetNotes: dispatch(wipeandReSetNotes)
})

export default connect(undefined, mapDispatchToProps)(Header)