import axios from 'axios';
import { notify } from 'react-notify-toast';
import {signUp,logIn} from '../../ActionCreators/auth/AuthActionCreators';

const BASE_URL='http://localhost:5000/api';

export const SignupAction =(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/auth/signup`, data)
        .then(response=>{
            dispatch(signUp(response));
            notify.show(response.data.message, 'success', 4000)

        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });        
    }
}

export const LoginAction =(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/auth/login`, data)
        .then(response=>{
            dispatch(logIn(response));
            localStorage.setItem('access-token', response.data.token)
            notify.show(response.data.message, 'success', 4000)
            console.log(response.data.message)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });    
    }
}

export const AdminLoginAction =(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/auth/admin`, data)
        .then(response=>{
            dispatch(logIn(response));
            localStorage.setItem('admin-token', response.data.token)
            notify.show(response.data.message, 'success', 4000)
            document.getElementById('closeAdminModal').click();
            console.log(response.data.message)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });    
    }
}