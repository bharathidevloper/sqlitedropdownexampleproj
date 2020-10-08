import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity, Alert, ToastAndroid, Image, YellowBox, LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ToolbarAndroid from '@react-native-community/toolbar-android';
import OTPTextView from 'react-native-otp-textinput';
import styles from '../styles/TrackerAddingScreenStyles';
import { ActivityIndicator } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase({ name: 'acon.db' });


//const TrackerAddingScreen = (props) => {
function TrackerAddingScreen(props) {
    const { navigation, imeiWhiteListOrNotMethod, imeiWhitelistedOrNotResponse, isLoading, dropDownMethod, dropDownResponse, trackerAddingMethod, trackerAddingResponse, error } = props
    const [IMEI_STR, setImeit] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [pollingInterval, setPollingInterval] = useState('');
    const [speedLimit, setSpeedLimit] = useState('');
    const [timeZone, setTimezone] = useState('');
    const [registration, setRegistration] = useState('');
    const [tagName, setTagName] = useState('');

    let deviceTypeJsonData = []
    let vehicleTypeJsonData = []
    let pollingIntervalJsonData = []
    let speedLimitJsonData = []
    let timeZoneJsonData = []

    useEffect(() => {
        createDatabase();

    }, []);

    const createDatabase = () => {
        db.transaction(txn => {
            txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='device_type'", [], (tx, result) => {
                if (result.rows.length == 0) {
                    console.log("table is created");
                    txn.executeSql("CREATE TABLE IF NOT EXISTS device_type(id INTEGER PRIMARY KEY AUTOINCREMENT,type VARCHAR(20), text VARCHAR(20),value INT(5))", []);
                    dropDownMethod({
                        userid: "rocheet@purple.com",
                        password: "Rocheet@321"
                    });
                }
                else {
                    console.log("table is truncate");

                    txn.executeSql("SELECT type,text,value FROM device_type", [], (tx, result) => {
                        if (result.rows.length == 0) {
                            dropDownMethod({
                                userid: "rocheet@purple.com",
                                password: "Rocheet@321"
                            });
                        } else {
                            console.log(result.rows.item(0));
                            for (var i = 0; i < result.rows.length; i++) {

                                if (result.rows.item(i).type == "device_types") {
                                    deviceTypeJsonData.push({
                                        value: result.rows.item(i).text,
                                        text: result.rows.item(i).text
                                    });
                                }
                                if (result.rows.item(i).type == "vehicle_types") {
                                    vehicleTypeJsonData.push({
                                        value: result.rows.item(i).text,
                                        text: result.rows.item(i).text
                                    });
                                }
                                if (result.rows.item(i).type == "timezones") {
                                    timeZoneJsonData.push({
                                        value: result.rows.item(i).text,
                                        text: result.rows.item(i).text
                                    });
                                }
                                if (result.rows.item(i).type == "pollint_interval") {
                                    pollingIntervalJsonData.push({
                                        value: result.rows.item(i).value,
                                        text: result.rows.item(i).value
                                    });
                                }
                                if (result.rows.item(i).type == "speed_limit") {
                                    speedLimitJsonData.push({
                                        value: result.rows.item(i).value,
                                        text: result.rows.item(i).value
                                    });
                                }

                            }
                        }
                    });
                }
            })
        })
    }

    useEffect(() => {

        if (error !== null) {
            alert(error.message)
        } else {
            if (imeiWhitelistedOrNotResponse !== undefined) {
                if (imeiWhitelistedOrNotResponse.sts === '001') {
                    console.log('IMEI whitelisted or not response')
                    console.log("T_RES: " + JSON.stringify(imeiWhitelistedOrNotResponse));
                    console.log("val" + imeiWhitelistedOrNotResponse.data.length + "");
                    if (imeiWhitelistedOrNotResponse.data.length + "" === '1') {
                        setImeit(imeiWhitelistedOrNotResponse.data[0].imi)
                        if (imeiWhitelistedOrNotResponse.data[0].live) {
                            setImeit('')
                            navigation.push('LiveTrackingScreen')
                        }

                    } else {
                        console.log('IMEI val > = 2');
                    }

                } else if (imeiWhitelistedOrNotResponse.sts === '002') {
                    ToastAndroid.show(imeiWhitelistedOrNotResponse.msg, ToastAndroid.SHORT)
                }
                else {
                    console.log('Unable to get IMEI whitelisted or not response')
                }
            } else {
                alert("please check your internet connection")
            }
        }



    }, [imeiWhitelistedOrNotResponse]);






    useEffect(() => {
        if (error !== null) {
            alert(error.message)
        } else {
            if (trackerAddingResponse !== undefined) {
                if (trackerAddingResponse.sts === '001') {
                    console.log('Got trackerAddingResponse')
                    ToastAndroid.show(trackerAddingResponse.msg, ToastAndroid.SHORT)
                } else if (trackerAddingResponse.sts === '002') {
                    console.log('TrackerAddingResponse Failed')
                    ToastAndroid.show(trackerAddingResponse.msg, ToastAndroid.SHORT)
                } else {
                    console.log('Doesnot got trackerAddingResponse')
                }
            } else {
                alert("please check your internet connection")
            }
        }

    }, [trackerAddingResponse]);




    saveData = () => {


        console.log("save clicked");
        console.log(deviceType);
        console.log(vehicleType);
        console.log(pollingInterval);
        console.log(speedLimit);
        console.log(timeZone);
        console.log("save clicked");
        if (IMEI_STR === '') {
            ToastAndroid.show("Please enter last 6 digits of IMEI number", ToastAndroid.SHORT)
        } else if (registration === '') {
            ToastAndroid.show("Please enter registration number", ToastAndroid.SHORT)
        } else if (tagName === '') {
            ToastAndroid.show("Please enter tag name", ToastAndroid.SHORT)
        } else if (deviceType === '') {
            ToastAndroid.show("Please enter device type", ToastAndroid.SHORT)
        } else if (vehicleType === '') {
            ToastAndroid.show("Please enter vehicle type", ToastAndroid.SHORT)
        } else if (pollingInterval === '') {
            ToastAndroid.show("Please enter polling interval", ToastAndroid.SHORT)
        } else if (speedLimit === '') {
            ToastAndroid.show("Please enter speed limit", ToastAndroid.SHORT)
        } else if (timeZone === '') {
            ToastAndroid.show("Please enter time zone", ToastAndroid.SHORT)
        } else {
            // For tracker adding API
            trackerAddingMethod({
                userid: "rocheet@purple.com",
                password: "Rocheet@321",
                device_type: deviceType + "",
                imi: IMEI_STR + "",
                polling_sec: pollingInterval + "",
                privilege: "2",
                regno: registration + "",
                speed_limit: speedLimit + "",
                tagname: tagName + "",
                timezone: timeZone + "",
                uuid: "123",
                vehicle_type: vehicleType + ""
            });

        }

    }

    goBack = () => {

        console.log("clicked");
        //navigation.goBack(null);
        ToastAndroid.show("Goto previous page", ToastAndroid.SHORT)
    }

    _callWhiteListedOrNot = (e) => {
        console.log('IMEI CALLED' + e + "");
        imeiWhiteListOrNotMethod({
            userid: "rocheet@purple.com",
            privilege: "2",
            imi: e,
        });

    }

    _CallDriverType = (value) => {
        console.log(value)

        for (var i = 0; i < deviceTypeJsonData.length; i++) {
            if (value === deviceTypeJsonData[i].value) {
                console.log(deviceTypeJsonData[i].text)
                setDeviceType(deviceTypeJsonData[i].text)
                console.log("deviceType");
                console.log(deviceType);
                console.log("deviceType");
            }
        }
    }

    _CallVehicleType = (value) => {
        console.log(value)
        for (var i = 0; i < vehicleTypeJsonData.length; i++) {
            if (value === vehicleTypeJsonData[i].value) {
                console.log(vehicleTypeJsonData[i].text)
                setVehicleType(vehicleTypeJsonData[i].text)
            }
        }
    }

    _CallPollingInterval = (value) => {
        console.log(value)
        setPollingInterval(value)
    }

    _CallSpeedLimit = (value) => {
        console.log(value)
        setSpeedLimit(value)
    }

    _CallTimeZone = (value) => {
        console.log(value)
        for (var i = 0; i < timeZoneJsonData.length; i++) {
            if (value === timeZoneJsonData[i].value) {
                console.log(timeZoneJsonData[i].text)
                setTimezone(timeZoneJsonData[i].text)
            }
        }
    }

    _CallRegistrationNumber = (text) => {
        setRegistration(text)
    }

    _CallTagName = (text) => {
        setTagName(text)
    }

    if (dropDownResponse !== undefined) {

        if (dropDownResponse.sts === '001') {
            console.log('got dropDownResponse');
            console.log(dropDownResponse.device_types.length);
            console.log(dropDownResponse.vehicle_types.length);
            console.log(dropDownResponse.pollint_interval.length);
            console.log(dropDownResponse.speed_limit.length);
            console.log(dropDownResponse.timezones.length);
            console.log('got dropDownResponse');


            //sqlite insert

            db.transaction(txn => {
                for (var i = 0; i < dropDownResponse.device_types.length; i++) {
                    txn.executeSql("INSERT INTO device_type(type,text,value) VALUES (?,?,?)", ["device_types", dropDownResponse.device_types[i].text, dropDownResponse.device_types[i].value], (tx, result) => {
                        if (result.rowsAffected > 0) {
                            console.log("result:" + result.rowsAffected);
                        }
                    })

                }
                for (var i = 0; i < dropDownResponse.vehicle_types.length; i++) {
                    txn.executeSql("INSERT INTO device_type(type,text,value) VALUES (?,?,?)", ["vehicle_types", dropDownResponse.vehicle_types[i].text, dropDownResponse.vehicle_types[i].value], (tx, result) => {
                        if (result.rowsAffected > 0) {
                            console.log("result:" + result.rowsAffected);
                        }
                    })

                }
                for (var i = 0; i < dropDownResponse.timezones.length; i++) {
                    txn.executeSql("INSERT INTO device_type(type,text,value) VALUES (?,?,?)", ["timezones", dropDownResponse.timezones[i].text, dropDownResponse.timezones[i].value], (tx, result) => {
                        if (result.rowsAffected > 0) {
                            console.log("result:" + result.rowsAffected);
                        }
                    })

                }
                for (var i = 0; i < dropDownResponse.pollint_interval.length; i++) {
                    txn.executeSql("INSERT INTO device_type(type,value) VALUES (?,?)", ["pollint_interval", dropDownResponse.pollint_interval[i]], (tx, result) => {
                        if (result.rowsAffected > 0) {
                            console.log("result:" + result.rowsAffected);
                        }
                    })
                }
                for (var i = 0; i < dropDownResponse.speed_limit.length; i++) {
                    txn.executeSql("INSERT INTO device_type(type,value) VALUES (?,?)", ["speed_limit", dropDownResponse.speed_limit[i]], (tx, result) => {
                        if (result.rowsAffected > 0) {
                            console.log("result:" + result.rowsAffected);
                        }
                    })

                }
            })

            db.transaction(txn => {
                txn.executeSql("SELECT * FROM device_type", [], (tx, result) => {
                    if (result.rows.length > 0) {
                        var temp = [];
                        for (let i = 0; i < result.rows.length; ++i) {
                            temp.push(result.rows.item(i));
                        }
                        console.log(temp);


                    }
                })
            })

            for (var i = 0; i < dropDownResponse.device_types.length; i++) {
                deviceTypeJsonData.push({
                    value: dropDownResponse.device_types[i].text,
                    text: dropDownResponse.device_types[i].value
                });
            }
            //  console.log("deviceTypeJsonData" + JSON.stringify(deviceTypeJsonData))

            for (var i = 0; i < dropDownResponse.vehicle_types.length; i++) {
                vehicleTypeJsonData.push({
                    value: dropDownResponse.vehicle_types[i].text,
                    text: dropDownResponse.vehicle_types[i].value
                });
            }
            // console.log("vehicleTypeJsonData" + JSON.stringify(vehicleTypeJsonData))

            for (var i = 0; i < dropDownResponse.pollint_interval.length; i++) {
                pollingIntervalJsonData.push({
                    value: dropDownResponse.pollint_interval[i],
                });
            }
            //  console.log("pollingIntervalJsonData" + JSON.stringify(pollingIntervalJsonData))

            for (var i = 0; i < dropDownResponse.speed_limit.length; i++) {
                speedLimitJsonData.push({
                    value: dropDownResponse.speed_limit[i],
                });
            }
            // console.log("speedLimitJsonData" + JSON.stringify(speedLimitJsonData))

            for (var i = 0; i < dropDownResponse.timezones.length; i++) {
                timeZoneJsonData.push({
                    value: dropDownResponse.timezones[i].text,
                    text: dropDownResponse.timezones[i].value
                });
            }
            //console.log("timeZoneJsonData" + JSON.stringify(timeZoneJsonData))

        } else {
            console.log('Doesnot got dropDownResponse')
            db.transaction((txn) => {
                txn.executeSql(
                    'SELECT type,text,value FROM device_type',
                    [],
                    (tx, result) => {
                        console.log(result.rows.item(0));
                        for (var i = 0; i < result.rows.length; i++) {

                            if (result.rows.item(i).type == 'device_types') {
                                deviceTypeJsonData.push({
                                    value: result.rows.item(i).text,
                                    text: result.rows.item(i).text,
                                });
                            }
                            if (result.rows.item(i).type == 'vehicle_types') {
                                vehicleTypeJsonData.push({
                                    value: result.rows.item(i).text,
                                    text: result.rows.item(i).text,
                                });
                            }
                            if (result.rows.item(i).type == 'timezones') {
                                timeZoneJsonData.push({
                                    value: result.rows.item(i).text,
                                    text: result.rows.item(i).text,
                                });
                            }
                            if (result.rows.item(i).type == 'pollint_interval') {
                                pollingIntervalJsonData.push({
                                    value: result.rows.item(i).value,
                                    text: result.rows.item(i).value,
                                });
                            }
                            if (result.rows.item(i).type == 'speed_limit') {
                                speedLimitJsonData.push({
                                    value: result.rows.item(i).value,
                                    text: result.rows.item(i).value,
                                });

                            }
                        }
                    },
                );
            });



        }
    } else {
        alert("please check your internet connection")
    }

    LogBox.ignoreLogs([
        'Animated: `useNativeDriver` was not specified.',
        'componentWillReceiveProps has been renamed, and is not recommended for use',
        'Failed prop type: Invalid prop `dropdownPosition` of type `string` supplied to `Dropdown`, expected `number`'
    ]);





    return (
        isLoading === true ?
            <ActivityIndicator /> :
            <View>
                <StatusBar backgroundColor="#2a91f5" barStyle="light-content" />
                {/* <ToolbarAndroid style={styles.toolbar} title="Onboard" titleColor="white"
                    logo={require('../assets/back.png')}
                    title=" Onboard"
                    actions={[{ title: 'Settings', icon: require('../assets/sync.png'), show: 'always', size: 20 }]}
                /> */}
                <TouchableOpacity onPress={goBack} >

                    <View style={styles.toolbar}>
                        <Image
                            source={require('../assets/back.png')}
                            style={styles.goBack}
                        />
                        <Text style={styles.toolbarLL}>Onboard</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView>

                    <View style={styles.mainLL}>
                        <View style={styles.OTPLL}>
                            <Text style={styles.text}> Enter last 6-digits of IMEI</Text>
                            <View style={{ marginTop: 5 }}>
                                <OTPTextView
                                    handleTextChange={(e) => {
                                        console.log(e)
                                        if (e.length === 6) {

                                            _callWhiteListedOrNot(e)
                                        }

                                    }}
                                    containerStyle={styles.textInputContainer}
                                    textInputStyle={styles.roundedTextInput}
                                    inputCount={6}
                                    inputCellLength={1}
                                    tintColor={'#878686'}

                                />
                            </View>
                        </View>
                        <View style={styles.imei}>
                            <Text style={styles.imeitext}>IMEI : {IMEI_STR}</Text>
                        </View>
                        <View >
                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Registration Number</Text>
                                </View>

                                <TextInput style={styles.textinput}
                                    onChangeText={(text) => {
                                        _CallRegistrationNumber(text);
                                    }} />

                            </View>

                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Tag Name</Text>
                                </View>

                                <TextInput style={styles.textinput}
                                    onChangeText={(text) => {
                                        _CallTagName(text)
                                    }} />

                            </View>
                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Device Type</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.dropdownStyle}>

                                        <Dropdown
                                            itemCount={10}
                                            dropdownPosition='1'
                                            data={deviceTypeJsonData}
                                            onChangeText={(value) => {
                                                _CallDriverType(value);
                                            }}
                                        />

                                    </View>
                                    <Icon name="arrow-drop-down" size={40} style={styles.dropdown} />
                                </View>



                            </View>

                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Vehicle Type</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.dropdownStyle}>

                                        <Dropdown
                                            itemCount={10}
                                            dropdownPosition='1'
                                            data={vehicleTypeJsonData}
                                            onChangeText={(value) => {
                                                _CallVehicleType(value);
                                            }}
                                        />

                                    </View>
                                    <Icon name="arrow-drop-down" size={40} style={styles.dropdown} />
                                </View>



                            </View>

                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Poling Interval</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.dropdownStyle}>

                                        <Dropdown
                                            itemCount={10}
                                            dropdownPosition='1'
                                            data={pollingIntervalJsonData}
                                            onChangeText={(value) => {
                                                _CallPollingInterval(value);
                                            }}
                                        />

                                    </View>
                                    <Icon name="arrow-drop-down" size={40} style={styles.dropdown} />
                                </View>


                            </View>

                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Speed Limit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.dropdownStyle}>

                                        <Dropdown
                                            itemCount={10}
                                            dropdownPosition='1'
                                            data={speedLimitJsonData}
                                            onChangeText={(value) => {
                                                _CallSpeedLimit(value);
                                            }}
                                        />

                                    </View>
                                    <Icon name="arrow-drop-down" size={40} style={styles.dropdown} />
                                </View>



                            </View>

                            <View style={styles.textinputll}>
                                <View style={styles.textLL}>

                                    <Text style={styles.text}>Time Zone</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.dropdownStyle}>

                                        <Dropdown
                                            itemCount={10}
                                            dropdownPosition='1'
                                            data={timeZoneJsonData}
                                            onChangeText={(value) => {
                                                _CallTimeZone(value);
                                            }}
                                        />

                                    </View>
                                    <Icon name="arrow-drop-down" size={40} style={styles.dropdown} />
                                </View>


                            </View>

                            <View style={styles.buttonLL}>
                                <TouchableOpacity style={styles.buttonCnl}>
                                    <Text style={{ color: '#272626', fontFamily: 'montserrat_regular', fontSize: 17 }}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={saveData}>
                                    <Text style={{ color: '#ffffff', fontFamily: 'montserrat_regular', fontSize: 17 }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>

    );


}
export default TrackerAddingScreen;