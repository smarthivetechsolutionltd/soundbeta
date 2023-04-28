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

//pages
import InitPage from "./Screen/Pages/InitPage";
import HomePage from "./Screen/Pages/HomePage";
import Library from "./Screen/Pages/Library";


//firebase
import firebase from '@react-native-firebase/app';
// import firebaseconfig from "./config/firebaseconfig";

const Stack = createNativeStackNavigator();
// firebase.initializeApp(firebaseConfig);

const App = () => {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);

  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp({
  //     // Firebase configuration options
  //   });
  // }

  return (
    <>
      <StatusBar />

      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding}
            options={{ headerShown: false }} />

          {/* Auths */}
          <Stack.Screen name="Login" component={Login}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#121933',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />

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

          <Stack.Screen name="InitPage" component={InitPage}
            options={{ headerShown: false }} />

          <Stack.Screen name="HomePage" component={HomePage}
            options={{ headerShown: false }} />

          <Stack.Screen name="Library" component={Library}
            options={{ headerShown: false }} />
          
          {/* Contents */}

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
