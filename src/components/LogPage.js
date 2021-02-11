import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignInForm from './SignInForm'
import bgImage from '../assets/images/bg.jpg'

const LogPage = () => {
    const [hasAccount, setHasAccount] = useState(true)
    
    const changeForm = () => {
        setHasAccount(!hasAccount)
    }

    const optionText = hasAccount ? ['Precisa de uma senha?','Registre-se'] : ['Tem uma senha?','Logue-se']

    return (
        <div className="box-layout"
            style={{
                background: `url(${bgImage}`,
                backgroundSize: 'cover'
            }}
        >
        <div className="box-layout__box">
            <h1 className="box-layout__title">Lawyer Notes</h1>
            {hasAccount ? <LoginForm /> : <SignInForm />}
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