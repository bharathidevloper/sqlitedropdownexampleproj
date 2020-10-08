import { FETCH_DROP_DOWN, 
    FETCH_DROP_DOWN_SUCCEEDED, 
    FETCH_DROP_DOWN_FAILED } from '../actions/actionTypes';

const dropDownReducer = (initialState = {dropDownResponse:{},isLoading:false,error:null}, action) => {

switch (action.type) {
    case FETCH_DROP_DOWN:
        console.log("FETCH_DROP_DOWN is CALLED")
        return {dropDownRequest:action.dropDownRequest,dropDownResponse:initialState.dropDownResponse, isLoading:true,error:null};
    case FETCH_DROP_DOWN_SUCCEEDED:
        return {dropDownResponse:action.dropDownResponse, isLoading:false,error:null};
    case FETCH_DROP_DOWN_FAILED:
        return {dropDownResponse:initialState.dropDownResponse,isLoading:false,error: action.error};
    default:
        return {dropDownResponse:initialState.dropDownResponse, isLoading:false,error:null};
}
}

export default dropDownReducer;