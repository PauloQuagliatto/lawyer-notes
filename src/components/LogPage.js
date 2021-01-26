import React, { useState } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import SignInForm from './SignInForm'
import { startLogin, startSignIn } from '../actions/auth'

const LogPage = ({ startLogin, startSignIn }) => {
    const [hasAccount, setHasAccount] = useState(true)
    
    const onSubmit = (user) => {
        //startSignIn(user)
        setHasAccount(true)
    }
    
    const changeForm = () => {
        setHasAccount(!hasAccount)
    }

    const optionText = hasAccount ? ['Precisa de uma senha?','Registre-se'] : ['Tem uma senha?','Logue-se']

    return (
        <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Lawyer Notes</h1>
            {hasAccount ? <LoginForm /> : <SignInForm onSubmit={onSubmit} />}
            <div className="box-layout__optionals">
                <p className="log-option-text">{optionText[0]}</p>
                <button 
                    className="btn--create"
                    onClick={() => changeForm()}
                >
                    {optionText[1]}
                </button>
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  startSignIn: (user) => dispatch(startSignIn(user)),
  startLogin: (user) => dispatch(startLogin(user))
})

export default connect(undefined, mapDispatchToProps)(LogPage)