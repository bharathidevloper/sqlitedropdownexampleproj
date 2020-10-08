import { FETCH_TRACKER_ADDING, 
    FETCH_TRACKER_ADDING_SUCCEEDED, 
    FETCH_TRACKER_ADDING_FAILED } from '../actions/actionTypes';

const trackerAddingReducer = (initialState = {trackerAddingResponse:{},isLoading:false,error:null}, action) => {

switch (action.type) {
    case FETCH_TRACKER_ADDING:
        console.log("FETCH_TRACKER_ADDING is CALLED")
        return {trackerAddingRequest:action.trackerAddingRequest,trackerAddingResponse:initialState.trackerAddingResponse, isLoading:true,error:null};
    case FETCH_TRACKER_ADDING_SUCCEEDED:
        return {trackerAddingResponse:action.trackerAddingResponse,isLoading:false,error:null};
    case FETCH_TRACKER_ADDING_FAILED:
        return {trackerAddingResponse:initialState.trackerAddingResponse,isLoading:false,error: action.error};
    default:
        return {trackerAddingResponse:initialState.trackerAddingResponse, isLoading:false,error:null};
}
}

export default trackerAddingReducer;