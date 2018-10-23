
const REGISTER = 'register';
export const AUTHENTICATED = 'logged-in'

export const signUp = (response)=>{
    return {
        'type':REGISTER,
        'payload':response.data.message
    }
}

export const logIn =(response)=>{
    return {
        'type':AUTHENTICATED,
        'payload':response.data.message
    }
}

