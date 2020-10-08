import {FETCH_IMEI_WHITELIST_OR_NOT,FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED,FETCH_IMEI_WHITELIST_OR_NOT_FAILED} from '../actions/actionTypes';

//Saga Effects
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* getImeiWhiteListOrNot(action){
    try{
        console.log("SAGA_REQ"+JSON.stringify(action.imeiWhitelistedOrNotRequest))
        const imeiWhitelistedOrNotResponse = yield Api.getIMEIWhitelistedOrNotAPI(action.imeiWhitelistedOrNotRequest);
        console.log("SAGA_RES"+JSON.stringify(action.imeiWhitelistedOrNotResponse))
        yield put({type: FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED, imeiWhitelistedOrNotResponse: imeiWhitelistedOrNotResponse});
        console.log("IMEI_RES: "+JSON.stringify(imeiWhitelistedOrNotResponse));
    }
    catch (error){
        console.log("Error : "+error.message);
        yield put({type: FETCH_IMEI_WHITELIST_OR_NOT_FAILED,error})
    }
}

export function* watchIMEIWhiteListOrNot(){
    yield takeLatest(FETCH_IMEI_WHITELIST_OR_NOT, getImeiWhiteListOrNot);
}