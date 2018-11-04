
export const FETCH_MEDICINE = 'fetch_medicine'
export const ADD_MEDICINE = 'add_medicine'

export const fetchMedicine = (response) => {
    return {
        'type': FETCH_MEDICINE,
        'payload': response.data
    }
}

export const addMedicine = (response) => {
    return {
        'type': ADD_MEDICINE,
        'payload': response.data
    }

}