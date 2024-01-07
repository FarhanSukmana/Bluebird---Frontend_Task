import { createAction } from '@reduxjs/toolkit';

export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccess=(data) => ({
    type : 'FETCH_DATA_SUCCESS',
    payload : data,
});

export const fetchDataFailure= (error) =>({
    type : 'FETCH_DATA_FAILURE',
    payload : error,
});

export const addLikedCar = createAction('ADD_LIKED', (car) => ({
    payload: car,
}));
  
export const addBookCar = createAction('ADD_BOOK', (car) => ({
    payload: car,
}));