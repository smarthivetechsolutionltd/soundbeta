import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import "expo-dev-client"

//screens
import Onboarding from "./Screen/Onboarding/Onboarding";

//Auth
import Login from "./Screen/Auth/Login/Login";
import Signup from "./Screen/Auth/Signup/Signup";

//pages
import InitPage from "./Screen/Pages/InitPage";
import HomePage from "./Screen/Pages/HomePage";
import Library from "./Screen/Pages/Library";
import Settings from "./Screen/Pages/Settings";
import Search from "./Screen/Pages/Search";
import Player from "./Screen/Pages/PlayerPage";

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

const App = () => {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);

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
              headerTitleAlign: 'center',
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
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen name="InitPage" component={InitPage}
            options={{ headerShown: false }} />

          <Stack.Screen name="HomePage" component={HomePage}
            options={{ headerShown: false }} />

          <Stack.Screen name="Library" component={Library}
            options={{ headerShown: false }} />

          <Stack.Screen name="Settings" component={Settings}
            options={{
              title: 'Settings',
              headerStyle: {
                backgroundColor: '#121933',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }} />

          <Stack.Screen name="Search" component={Search}
            options={{ headerShown: false }} />

          <Stack.Screen name="Player" component={Player}
            options={{ headerShown: false }} />

          {/* Contents */}

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
