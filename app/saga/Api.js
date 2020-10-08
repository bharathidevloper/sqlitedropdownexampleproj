import React, { useEffect } from 'react';
import { Config } from '../config/index';
import { EndPoints } from '../rest';
import axios from 'axios';


/* function* getIMEIWhitelistedOrNotAPI(imeiWhitelistedOrNotRequest){
    console.log("IMEI_REQ: "+JSON.stringify(imeiWhitelistedOrNotRequest));
    const response = yield fetch(Config.BASE_API_URL+EndPoints.IMEI_WHITELISTED_OR_NOT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imeiWhitelistedOrNotRequest)
    })
    .then(response => response.json())
    .catch(error=>{
        console.log("error : "+error.message);
    });
    const imeiWhitelistedOrNotResponse = yield response;
    console.log("IMEI_RES: "+JSON.stringify(imeiWhitelistedOrNotResponse));
    return imeiWhitelistedOrNotResponse;
} */



/* function* getDropDownAPI(){
    console.log("DD_REQ: called");
    const response = yield fetch(Config.BASE_API_URL+EndPoints.DROPDOWN, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    })
    .then(response => response.json())
    .catch(error=>{
        console.log("error : "+error.message);
    });
    const dropDownResponse = yield response;
    console.log("DD_RES: "+JSON.stringify(dropDownResponse));
    return dropDownResponse;
} */

function* getDropDownAPI(dropDownRequest) {
    console.log("DD_REQ:"+JSON.stringify(dropDownRequest));
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }
    const response = yield axios.post(Config.BASE_API_URL + EndPoints.DROPDOWN,JSON.stringify(dropDownRequest),headers)
        .then((response) => response.data)
        .catch(error => {
            console.log(error.message);
        });
    const dropDownResponse = yield response;
    console.log("DD_RES: " + JSON.stringify(dropDownResponse));
    return dropDownResponse;
}

function* getIMEIWhitelistedOrNotAPI(imeiWhitelistedOrNotRequest) {
    console.log("IMEI_REQ: " + JSON.stringify(imeiWhitelistedOrNotRequest));
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const response = yield axios.post(Config.BASE_API_URL + EndPoints.IMEI_WHITELISTED_OR_NOT, JSON.stringify(imeiWhitelistedOrNotRequest), headers)
        .then((response) => response.data)
        .catch(error => {
            console.log(error.message);
        });
    const imeiWhitelistedOrNotResponse = yield response;
    console.log("IMEI_RES: " + JSON.stringify(imeiWhitelistedOrNotResponse));
    return imeiWhitelistedOrNotResponse;
}

function* getLiveTrackingAPI(liveTrackingRequest) {
    console.log("LT_REQ: " + JSON.stringify(liveTrackingRequest));
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const response = yield axios.post(Config.BASE_API_URL + EndPoints.LIVE_TRACKING, JSON.stringify(liveTrackingRequest), headers)
        .then((response) => response.data)
        .catch(error => {
            console.log(error.message);
        });
    const liveTrackingResponse = yield response;
    console.log("LT_RES: " + JSON.stringify(liveTrackingResponse));
    return liveTrackingResponse;
}

function* getTrackerAddingAPI(trackerAddingRequest) {
    console.log("TA_REQ: " + JSON.stringify(trackerAddingRequest));
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const response = yield axios.post(Config.BASE_API_URL + EndPoints.TRACKER_ADDING, JSON.stringify(trackerAddingRequest), headers)
        .then((response) => response.data)
        .catch(error => {
            console.log(error.message);
        });
    const trackerAddingResponse = yield response;
    console.log("TT_RES: " + JSON.stringify(trackerAddingResponse));
    return trackerAddingResponse;
}

export const Api = {
    getIMEIWhitelistedOrNotAPI,
    getDropDownAPI,
    getLiveTrackingAPI,
    getTrackerAddingAPI
}