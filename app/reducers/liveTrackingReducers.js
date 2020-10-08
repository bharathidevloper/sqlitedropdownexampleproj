import { FETCH_LIVE_TRACKING, 
    FETCH_LIVE_TRACKING_SUCCEEDED, 
    FETCH_LIVE_TRACKING_FAILED } from '../actions/actionTypes';

const liveTrackingReducer = (initialState = {liveTrackingResponse:{},isLoading:false,error:null}, action) => {

switch (action.type) {
    case FETCH_LIVE_TRACKING:
        console.log("FETCH_LIVE_TRACKING is CALLED")
        return {liveTrackingRequest:action.liveTrackingRequest,liveTrackingResponse:initialState.liveTrackingResponse, isLoading:true,error:null};
    case FETCH_LIVE_TRACKING_SUCCEEDED:
        return {liveTrackingResponse:action.liveTrackingResponse,isLoading:false,error:null};
    case FETCH_LIVE_TRACKING_FAILED:
        return {liveTrackingResponse:initialState.liveTrackingResponse,isLoading:false,error: action.error};
    default:
        return {liveTrackingResponse:initialState.liveTrackingResponse, isLoading:false,error:null};
}
}

export default liveTrackingReducer;