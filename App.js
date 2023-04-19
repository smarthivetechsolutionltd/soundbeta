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

const Stack = createNativeStackNavigator();

const App = () => {
  
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="onboarding" component={Onboarding}
            options={{ headerShown: false }} />

          {/* Auths */}
          <Stack.Screen name="login" component={Login}
            options={{ headerShown: false }} />

          <Stack.Screen name="signup" component={Signup}
            options={{ headerShown: false }} />

     

          {/* Contents */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
