import React, { useState } from 'react'

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const onEmailChange = (e) => {
        const email = e.target.value
        setEmail(() => ({ email }))
    }
    const onPasswordChange = (e) => {
        const password = e.target.value
        setPassword(() => ({ password }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setError(() => ({ error: '' }))
        const user = {
            emai: this.state.email,
            password: this.state.password
        }
    }
    return (
        <form className="form--log" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <h1 className="box-layout__title">Registre seu usuário</h1>
            <input
                type="text"
                className="text-input"
                placeholder="Email"
                autoFocus
                value={email}
                onChange={onEmailChange}
            />
            <input
                type="password"
                className="text-input"
                placeholder="Senha"
                value={password}
                onChange={onPasswordChange}
            />
            <button className="btn">Registrar</button>
        </form>
    )
}

export { SignInForm as default }