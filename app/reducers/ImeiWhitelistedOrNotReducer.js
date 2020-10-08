import { FETCH_IMEI_WHITELIST_OR_NOT, 
        FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED, 
        FETCH_IMEI_WHITELIST_OR_NOT_FAILED } from '../actions/actionTypes';

const ImeiWhitelistedOrNotReducer = (initialState = {imeiWhitelistedOrNotResponse:{},isLoading:false,error:null}, action) => {
    
    switch (action.type) {
        case FETCH_IMEI_WHITELIST_OR_NOT:
            console.log("FETCH_IMEI_WHITELIST_OR_NOT is CALLED")
            return {imeiWhitelistedOrNotRequest:action.imeiWhitelistedOrNotRequest,imeiWhitelistedOrNotResponse:initialState.imeiWhitelistedOrNotResponse, isLoading:true,error:null};
        case FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED:
            return {imeiWhitelistedOrNotResponse:action.imeiWhitelistedOrNotResponse, isLoading:false,error:null};
        case FETCH_IMEI_WHITELIST_OR_NOT_FAILED:
            return {imeiWhitelistedOrNotResponse:initialState.imeiWhitelistedOrNotResponse,isLoading:false,error: action.error};
        default:
            return {imeiWhitelistedOrNotResponse:initialState.imeiWhitelistedOrNotResponse, isLoading:false,error:null};
    }
}

export default ImeiWhitelistedOrNotReducer;