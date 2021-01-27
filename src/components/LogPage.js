import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignInForm from './SignInForm'

const LogPage = ({ startLogin, startSignIn }) => {
    const [hasAccount, setHasAccount] = useState(true)
    
    const onSubmit = () => {
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


export { LogPage as default }