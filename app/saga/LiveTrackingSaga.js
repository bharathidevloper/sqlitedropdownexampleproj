import {FETCH_LIVE_TRACKING,FETCH_LIVE_TRACKING_SUCCEEDED,FETCH_LIVE_TRACKING_FAILED} from '../actions/actionTypes';

//Saga Effects
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* getLiveTracking(action){
    try{
        
        const liveTrackingResponse = yield Api.getLiveTrackingAPI(action.liveTrackingRequest);
        yield put({type: FETCH_LIVE_TRACKING_SUCCEEDED, liveTrackingResponse: liveTrackingResponse});
        console.log("LT_RES: "+JSON.stringify(liveTrackingResponse));
    }
    catch (error){
        console.log("Error : "+error.message);
        yield put({type: FETCH_LIVE_TRACKING_FAILED,error})
    }
}

export function* watchLiveTracking(){
    yield takeLatest(FETCH_LIVE_TRACKING, getLiveTracking);
}