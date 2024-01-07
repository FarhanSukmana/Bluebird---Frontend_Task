import {combineReducers} from 'redux';

const initialState = {
    data : [],
    loading : false,
    error : null,
};

const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_DATA_REQUEST':
            return {...state, loading:true , error:null};
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading:false, data:action.payload};
        case 'FETCH_DATA_ERROR':
            return {...state, loading:false, errors:action.payload}
        default:
            return state;
    }
};

const carInitialState ={
    likedCars:[],
};
const carReducer = (state = carInitialState, action)=>{
    switch(action.type){
        case 'ADD_LIKED':
            return {
                ...state,
                likedCars:[...state.likedCars, action.payload],
            };

            default:
                return state;
    }
};

const bookInitialState={
    bookCars:[],
};

const bookReducer = (state=bookInitialState, action) => {
    switch(action.type){
        case"ADD_BOOK":
        return{
            ...state,
            bookCars:[...state.bookCars, action.payload],
        };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    data :dataReducer,
    car :carReducer,
    book:bookReducer,
});

export default rootReducer;