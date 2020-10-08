import {
    FETCH_IMEI_WHITELIST_OR_NOT,
    FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED,
    FETCH_IMEI_WHITELIST_OR_NOT_FAILED,
    FETCH_DROP_DOWN,
    FETCH_DROP_DOWN_SUCCEEDED,
    FETCH_DROP_DOWN_FAILED,
    FETCH_LIVE_TRACKING,
    FETCH_LIVE_TRACKING_SUCCEEDED,
    FETCH_LIVE_TRACKING_FAILED, 
    FETCH_TRACKER_ADDING,
    FETCH_TRACKER_ADDING_FAILED, 
    FETCH_TRACKER_ADDING_SUCCEEDED
} from './actionTypes';

//IMEIWhitelistedOrNot
export const fetchImeiWhitelistedOrNotAction = (imeiWhitelistedOrNotRequest) =>{
    return{
        type: FETCH_IMEI_WHITELIST_OR_NOT,
        imeiWhitelistedOrNotRequest
    }
}

export const fetchImeiWhitelistedOrNotSuccessAction = (imeiWhitelistedOrNotResponse) => {
    return{
        type:FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED,
        imeiWhitelistedOrNotResponse,
    }
}

export const fetchImeiWhitelistedOrNotFailedAction = (error) => {
    console.log("actionFailed: ");
    console.log(error);
    return{
        type: FETCH_IMEI_WHITELIST_OR_NOT_FAILED,
        error,
    }
}


// dropdown

export const fetchDropDownAction = (dropDownRequest) =>{
    return{
        type: FETCH_DROP_DOWN,
        dropDownRequest
    }
}

export const fetchDropDownSuccessAction = (dropDownResponse) => {
    return{
        type:FETCH_DROP_DOWN_SUCCEEDED,
        dropDownResponse,
    }
}

export const fetchDropDownFailedAction = (error) => {
    console.log("actionFailed: ");
    console.log(error);
    return{
        type: FETCH_DROP_DOWN_FAILED,
        error,
    }
}

// Live Tracking
export const fetchLiveTrackingAction = (liveTrackingRequest) =>{
    return{
        type: FETCH_LIVE_TRACKING,
        liveTrackingRequest
    }
}

export const fetchLiveTrackingSuccessAction = (liveTrackingResponse) => {
    return{
        type:FETCH_LIVE_TRACKING_SUCCEEDED,
        liveTrackingResponse,
    }
}

export const fetchLiveTrackingFailedAction = (error) => {
    console.log("actionFailed: ");
    console.log(error);
    return{
        type: FETCH_LIVE_TRACKING_FAILED,
        error,
    }
}


// Tracker Adding
export const fetchTrackerAddingAction = (trackerAddingRequest) =>{
    return{
        type:FETCH_TRACKER_ADDING,
        trackerAddingRequest
    }
}

export const fetchTrackerAddingSuccessAction = (trackerAddingResponse) => {
    return{
        type:FETCH_TRACKER_ADDING_SUCCEEDED,
        trackerAddingResponse,
    }
}

export const fetchTrackerAddingFailedAction = (error) => {
    console.log("actionFailed: ");
    console.log(error);
    return{
        type:FETCH_TRACKER_ADDING_FAILED,
        error,
    }
}