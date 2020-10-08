import {FETCH_IMEI_WHITELIST_OR_NOT,FETCH_IMEI_WHITELIST_OR_NOT_SUCCEEDED,FETCH_IMEI_WHITELIST_OR_NOT_FAILED, FETCH_DROP_DOWN_SUCCEEDED, FETCH_DROP_DOWN_FAILED, FETCH_DROP_DOWN} from '../actions/actionTypes';

//Saga Effects
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* getDropDownValues(action){
    try{
        
        const dropDownResponse = yield Api.getDropDownAPI(action.dropDownRequest);
        yield put({type: FETCH_DROP_DOWN_SUCCEEDED, dropDownResponse: dropDownResponse});
        console.log("DD_RES: "+JSON.stringify(dropDownResponse));
    }
    catch (error){
        console.log("Error : "+error.message);
        yield put({type: FETCH_DROP_DOWN_FAILED,error})
    }
}

export function* watchDropDownValues(){
    yield takeLatest(FETCH_DROP_DOWN, getDropDownValues);
}