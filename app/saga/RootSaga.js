import { call, fork, all } from 'redux-saga/effects';
import { watchIMEIWhiteListOrNot } from '../saga/IMEIWhiteListOrNotSaga';
import {watchDropDownValues} from '../saga/DropDownSaga';
import {watchLiveTracking} from '../saga/LiveTrackingSaga';
import {watchTrackerAdding} from '../saga/TrackerAddingSaga';

export default function* rootSaga() {

    yield all([

        watchIMEIWhiteListOrNot(),
        watchDropDownValues(),
        watchLiveTracking(),
        watchTrackerAdding()
    ])
}