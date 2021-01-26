export default (state = {}, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return{
                email: action.user
            }
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {}
        default:
            return state    
    }
}