import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import LessonScreen from '../../screens/LessonScreen';
import PremiumScreen from '../../screens/PremiumScreen';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lesson" component={LessonScreen} />
            <Stack.Screen name="Premium" component={PremiumScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
