import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Lawyer Notes</h1>
                <button className="btn" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)