import { FETCH_MEDICINE} from '../../ActionCreators/medicine/medicineActionCreators';

export default (state={}, action) => {
    switch(action.type){
        case FETCH_MEDICINE:
        return {
            ...action.payload, ...state
        }
        default:
         return state
    }
}