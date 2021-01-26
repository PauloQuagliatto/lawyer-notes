import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <form className="box-layout__content" onSubmit={handleSubmit(onSubmit)}>
         <h1 className="box-layout__title box-layout__title--small">Logue-se</h1>
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
            <button 
                className="btn"
                type="submit"
            >Login</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (user) => dispatch(startLogin(user))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)