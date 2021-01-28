import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startSignIn } from '../actions/auth'

const SignInForm = ({ startSignIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const user = { email, password }
        startSignIn(user)
    }
    return (
        <form className="box-layout__content" onSubmit={onSubmit}>
            <h1 className="box-layout__title box-layout__title--small">Registre seu usuário</h1>
            <input
                type="text"
                className="text-input text-input--spaced"
                placeholder="Email"
                autoFocus
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <input
                type="password"
                className="text-input text-input--spaced"
                placeholder="Senha"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <button className="btn" type="submit">Registrar</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startSignIn: (user) => dispatch(startSignIn(user))
})

export default connect(undefined, mapDispatchToProps)(SignInForm)