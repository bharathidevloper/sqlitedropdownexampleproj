import { connect } from 'react-redux';
import { fetchImeiWhitelistedOrNotAction,fetchDropDownAction,fetchTrackerAddingAction} from '../actions/index';
import TrackerAddingScreen from '../screens/TrackerAddingScreen';

const mapStateToProps = (state) => {

    return {
        ...state,
        imeiWhitelistedOrNotResponse: state.ImeiWhitelistedOrNotReducer.imeiWhitelistedOrNotResponse,
        isLoading: state.ImeiWhitelistedOrNotReducer.isLoading,
        error: state.ImeiWhitelistedOrNotReducer.error,
        dropDownResponse: state.dropDownReducer.dropDownResponse,
        trackerAddingResponse:state.trackerAddingReducer.trackerAddingResponse

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        imeiWhiteListOrNotMethod: (imeiWhitelistedOrNotRequest) => {
            console.log("REQ : " + JSON.stringify(imeiWhitelistedOrNotRequest))
            dispatch(fetchImeiWhitelistedOrNotAction(imeiWhitelistedOrNotRequest));
        },
        dropDownMethod:(dropDownRequest)=>{
            console.log("REQ : " + JSON.stringify(dropDownRequest))
            dispatch(fetchDropDownAction(dropDownRequest));
        },
        trackerAddingMethod:(trackerAddingRequest)=>{
            console.log("REQ : " + JSON.stringify(trackerAddingRequest))
            dispatch(fetchTrackerAddingAction(trackerAddingRequest));
        }
    }
}

const OnBoardingContainer = connect(mapStateToProps, mapDispatchToProps)(TrackerAddingScreen);
export default OnBoardingContainer;