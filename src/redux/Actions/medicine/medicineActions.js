
import { notify } from 'react-notify-toast';
import {fetchMedicine, addMedicine} from '../../ActionCreators/medicine/medicineActionCreators';
import Axiosinstance from '../../../instances/AxiosInstance';
import AdminAxiosinstance from '../../../instances/AdminInstance';

const BASE_URL='http://localhost:5000/api';

export const fetchMedicineAction = () => {
    return async(dispatch) => {
        await Axiosinstance.get('/medicines')
        .then(response =>{
            dispatch(fetchMedicine(response))
            console.log(response.data, '--------------')
        }).catch(error=>{
            console.log(error.response)
                notify.show("error.response.data.message", 'error', 4000)
        });  
    }

}

export const addMedicineAction = (data) => {
    return async(dispatch) => {
        await AdminAxiosinstance.post(`${BASE_URL}/medicines`, data)
        .then(response =>{
            dispatch(addMedicine(response))
            document.getElementById('closeAddModal').click();
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        }); 
    }
}