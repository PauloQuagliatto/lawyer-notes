import { firebase } from '../firebase/firebase'

export const startSignIn = (userData = {}) => {
    return (dispatch) => {
        const {
            email = '',
            password = ''
        } = userData
        const user = { email, password }
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((user) => {
            dispatch(signIn(...user))
        })
    }
}

export const signIn = (user) => ({
    type: 'SIGN_IN',
    user
})

export const startLogin = (userData = {}) => {
    return (dispatch) => {
        const {
            email = '',
            password = ''
        } = userData
        const user = { email, password }
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((user) => {
            dispatch(login(user.uid))
        }).catch(error => alert('Usuário não existe!'))
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

