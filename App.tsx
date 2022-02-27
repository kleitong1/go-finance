
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'react-native';


import {
  useFonts, // hook
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
}

from '@expo-google-fonts/poppins'


import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard';
import AppLoading from 'expo-app-loading';


export default function App() {

  

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold

  });

  if(!fontsLoaded) {
    return <AppLoading /> // expo install expo-app-loading
  }


  return (
    <>
    <StatusBar barStyle="light-content" />
    
    
    
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>


    </>
  )

  
}
