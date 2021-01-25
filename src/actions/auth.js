import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
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

export const signIn = (email, password) => ({
    type: 'SIGN_IN',
    email,
    password
})

export const startSignIn = () => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword()
    }
}