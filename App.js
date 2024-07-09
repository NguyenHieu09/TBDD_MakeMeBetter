import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Application from './src/Application';
// import { PaperProvider } from 'react-native-paper';
// import AuthNavigator from './drawer/AuthNavigator';


export default function App() {

  return (
    <Application/>
  );


  // return (
  //     <PaperProvider>
  //       <NavigationContainer >
  //     <AuthNavigator/>
  //     </NavigationContainer>
  //   </PaperProvider>    
    
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

