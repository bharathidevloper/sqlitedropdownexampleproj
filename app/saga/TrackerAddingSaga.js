import {FETCH_TRACKER_ADDING,FETCH_TRACKER_ADDING_SUCCEEDED,FETCH_TRACKER_ADDING_FAILED} from '../actions/actionTypes';

//Saga Effects
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* getTrackerAdding(action){
    try{
        
        const trackerAddingResponse = yield Api.getTrackerAddingAPI(action.trackerAddingRequest);
        yield put({type:FETCH_TRACKER_ADDING_SUCCEEDED, trackerAddingResponse:trackerAddingResponse});
        console.log("TA_RES: "+JSON.stringify(trackerAddingResponse));
    }
    catch (error){
        console.log("Error : "+error.message);
        yield put({type: FETCH_TRACKER_ADDING_FAILED,error})
    }
}

export function* watchTrackerAdding(){
    yield takeLatest(FETCH_TRACKER_ADDING, getTrackerAdding);
}