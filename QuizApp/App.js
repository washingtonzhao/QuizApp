/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 **/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from './app/components/LandingScreen';
import LanguageScreen from './app/components/LanguageScreen';
import QuizNav from './app/components/QuizNav';
import Quiz from './app/components/Quiz';

const Stack = createStackNavigator();

function App(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={LandingScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="LanguageScreen"
            component={LanguageScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="QuizNav"
            component={QuizNav}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}
        /> 

        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;

