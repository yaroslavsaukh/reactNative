import { StatusBar } from 'expo-status-bar';
import React, {Button, StyleSheet, Text, View} from 'react-native';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Profile from "./components/Profile";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
                        component={Home}
                        options={{title: 'Головна сторінка',
                            headerTintColor: 'white',
                            headerStyle:{backgroundColor: '#4CAD3B', },
              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />
              ),}}/>
            <Stack.Screen name="Gallery"
                          component={Gallery}
                          options={{title: 'Галерея',
                              headerTintColor: 'white',
                              headerStyle:{backgroundColor: '#EE781C', },
                              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="file-image" color={color} size={size} />
                              ),}}/>
          <Stack.Screen name="Profile" component={Profile} options={{title: 'Профіль',
              headerTintColor: 'white',
              headerStyle:{backgroundColor: '#224A98'},
              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />
              ),}}/>
        </Stack.Navigator>

      </NavigationContainer>
  );
}


