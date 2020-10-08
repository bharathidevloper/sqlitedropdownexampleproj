import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image,TouchableOpacity } from 'react-native';
import styles from '../styles/LiveTrackingScreenStyle';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native-paper';


//const LiveTrackingScreen = (props) => {
function LiveTrackingScreen(props){    
    const { navigation,liveTrackingMethod,isLoading,liveTrackingResponse} = props;
    goBack = () => {

        console.log("clicked");
        navigation.goBack(null);
    }

    useEffect(() => {
        // Call dropdown API here
        liveTrackingMethod({
            userid: "rocheet@purple.com",
            privilege: "2",
            imi:"44074474363"
        });
    }, []);
    return (
       isLoading===true ?
       <ActivityIndicator/>:
       <View>
           {
               liveTrackingResponse.sts==="001" ?
               <View>
               <View>
                   <StatusBar backgroundColor="#2a91f5" barStyle="light-content" />
                   <TouchableOpacity onPress={this.goBack} >
   
                       <View style={styles.toolbar}>
                           <Image
                               source={require('../assets/back.png')}
                               style={styles.goBack}
                           />
                           <Text style={styles.toolbarLL}>Live</Text>
                       </View>
                   </TouchableOpacity>
               </View>
               <View style={styles.mapLL}>
                   <MapView
                       style={styles.map}
                       initialRegion={{
                           latitude: Number(liveTrackingResponse.data.lat),
                           longitude: Number(liveTrackingResponse.data.lon),
                           latitudeDelta: 0.0043,
                           longitudeDelta: 0.0034,
                       }}
   
                   >
                       <Marker
   
                           coordinate={{
                               latitude: Number(liveTrackingResponse.data.lat),
                               longitude: Number(liveTrackingResponse.data.lon),
                           }}
                           image={require("../assets/car.png")}
   
                       />
                   </MapView>
               </View>
           </View>
    : <View></View>
           }
       </View>
    );
}
export default LiveTrackingScreen;
