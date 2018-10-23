import {AUTHENTICATED} from '../../ActionCreators/auth/AuthActionCreators';

export default (state={}, action)=>{
    switch(action.type){
        case AUTHENTICATED:
            return {
                ...state, payload: action.payload, loggedin: true
            }
        default:
        return state;
    }
        
}