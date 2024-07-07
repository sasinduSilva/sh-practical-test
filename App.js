import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from "react-redux";
import store from "./app/store";
import { AppStack,AuthStack } from "./routes";
import { login } from "./reducers/userSlice";
import { dispatch } from "./app/store";
import {TOKEN_KEY} from '@env';
import AsyncStore from "./app/AsyncStore";
import UserService from "./services/UserService";
import BottomTabNavigator from "./routes/navigators/BottomTabNavigator";

const AppContent = () => {

  useEffect(()=>{
    handleGetUser();
  },[]);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleGetUser = async () =>{
    const userToken = await AsyncStore.getItem(JSON.stringify(TOKEN_KEY));
  
    if(userToken){
     try {
      const loggedInUser = await UserService.getUserByToken({
        token:userToken
      });
  
      if(loggedInUser){
        dispatch(
          login({
            isLoggedIn: true,
            ...loggedInUser,
          })
        );
  
        
      }else{
        Alert("User not found, please login");
        return;
      }
     } catch (error) {
      console.log("error getting data at app.js "+error);
     }
    }
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthStack />}
      
    </NavigationContainer>
  )
}


 
export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({})