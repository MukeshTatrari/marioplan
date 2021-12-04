const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signOut success');
            return {
                state
            }
        case 'SIGNUP_SUCCESS':
            console.log('SignUp success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signUp Error');
            return {
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
};

export default AuthReducer;