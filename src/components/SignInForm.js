import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { startSignIn } from '../actions/auth'

const SignInForm = ({ startSignIn }) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        startSignIn(data.email, data.password)
    }
    return (
        <form className="box-layout__content" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="box-layout__title box-layout__title--small">Registre seu usuário</h1>
            <input
                ref={register}
                type="text"
                className="text-input text-input--spaced"
                placeholder="Email"
                autoFocus
                name="email"
            />
            <input
                ref={register}
                type="password"
                className="text-input text-input--spaced"
                placeholder="Senha"
                name="password"
            />
            <button className="btn" type="submit">Registrar</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startSignIn: dispatch(startSignIn)
})

export default connect(undefined, mapDispatchToProps)(SignInForm)