import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getFirestore} from 'firebase/firestore';

import SignInScreen from './screens/SignInScreen';
import BeneficiaryRegistrationScreen from './screens/BeneficiaryRegistrationScreen';
import GenerateIDScreen from './screens/GenerateIDScreen';
import AidDistributionScreen from './screens/AidDistributionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="BeneficiaryRegistration" component={BeneficiaryRegistrationScreen} />
        <Stack.Screen name="GenerateID" component={GenerateIDScreen} />
        <Stack.Screen name="AidDistribution" component={AidDistributionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}