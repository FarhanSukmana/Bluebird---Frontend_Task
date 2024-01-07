import {fetchDataFailure, fetchDataSuccess, fetchDataRequest} from './action';

export const fetchData = () =>{
    return async (dispatch) => {
        dispatch(fetchDataRequest());

        try{
            const response = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles')
            const data = await response.json()
            dispatch(fetchDataSuccess(data));
        }catch(error){
            dispatch(fetchDataFailure(error.message));
        }
    };
};
