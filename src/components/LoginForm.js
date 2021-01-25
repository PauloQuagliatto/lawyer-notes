import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})

    const login = (email, password) => {
        setUser({
            email: email,
            password: password
        })

        startLogin(user)
    }
    return (
        <div >
            <input
                type="text"
                className="text-input text-input--spaced"
                placeholder="Email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="text-input text-input--spaced"
                placeholder="Senha"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={login}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (user) => dispatch(startLogin(user))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)