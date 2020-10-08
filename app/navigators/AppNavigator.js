import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {Component} from 'react';
import TrackAddingScreen from '../screens/TrackerAddingScreen';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import OnBoardingContainer from '../containers/OnBoardingContainer';
import LiveTrackingContainer from '../containers/LiveTrackingContainer';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="TrackAddingScreen" headerMode='none'>
      <Stack.Screen name="TrackAddingScreen" component={OnBoardingContainer} options={{ title: 'TrackAdding' }}/>
      <Stack.Screen name="LiveTrackingScreen" component={LiveTrackingContainer} options={{ title: 'Live' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default AppNavigator;