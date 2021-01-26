import { firebase } from '../firebase/firebase'

export const startSignIn = ({email, password}) => {
    const user = { email, password }
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(user)
        .then((user) => {
            debugger
            dispatch(signIn(user))
        })
    }
}

export const signIn = (user) => ({
    type: 'SIGN_IN',
    user
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword()
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

