import { connect } from 'react-redux';
import { fetchLiveTrackingAction} from '../actions/index';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';

const mapStateToProps = (state) => {

    return {
        ...state,
        liveTrackingResponse: state.liveTrackingReducer.liveTrackingResponse,
        isLoading: state.liveTrackingReducer.isLoading,
        error: state.liveTrackingReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        liveTrackingMethod: (liveTrackingRequest) => {
            console.log("REQ : " + JSON.stringify(liveTrackingRequest))
            dispatch(fetchLiveTrackingAction(liveTrackingRequest));
        }
    }
}

const LiveTrackingContainer = connect(mapStateToProps, mapDispatchToProps)(LiveTrackingScreen);
export default LiveTrackingContainer;