import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

//screens
import Onboarding from "./Screen/Onboarding/Onboarding";

//Auth
import Login from "./Screen/Auth/Login/Login";
import Signup from "./Screen/Auth/Signup/Signup";
import firebase from '@react-native-firebase/app';
import firebaseConfig from './config/firebaseconfig.js';


const Stack = createNativeStackNavigator();

const App = () => {
  
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);
  firebase.initializeApp(firebaseConfig);


  return (
    <>
      <StatusBar />

      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding}
            options={{ headerShown: false }} />

          {/* Auths */}
          <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }} />

          <Stack.Screen name="Signup" component={Signup}
            options={{
              title: 'Create Account',
              headerStyle: {
                backgroundColor: '#121933',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
/>
     

          {/* Contents */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
