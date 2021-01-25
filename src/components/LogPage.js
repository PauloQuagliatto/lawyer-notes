import React, { useState } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import SignInForm from './SignInForm'
import { startLogin, startSignIn } from '../actions/auth'

const LogPage = ({ startLogin, startSignIn}) => {
    const [hasAccount, setHasAccount] = useState(true)
    const onSubmit = (user) => {
        this.props.startSignIn(user)
        this.props.history.push('/dashboard')
    }
    
    return (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Lawyer Notes</h1>
            {hasAccount ? <LoginForm /> : <SignInForm onSubmit={onSubmit} />}
            <button 
                className="btn--create"
                onClick={() => setHasAccount(false)}
            >
                Criar Conta
            </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  startSignIn: (user) => dispatch(startSignIn(user)),
  startLogin: (user) => dispatch(startLogin(user))
})

export default connect(undefined, mapDispatchToProps)(LogPage)