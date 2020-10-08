import {combineReducers} from 'redux';
import ImeiWhitelistedOrNotReducer from '../reducers/ImeiWhitelistedOrNotReducer';
import dropDownReducer from '../reducers/dropDownReducers';
import liveTrackingReducer from '../reducers/liveTrackingReducers';
import trackerAddingReducer from '../reducers/trackerAddingReducers';

const allReducers = combineReducers({
    ImeiWhitelistedOrNotReducer,
    dropDownReducer,
    liveTrackingReducer,
    trackerAddingReducer

});

export default allReducers;