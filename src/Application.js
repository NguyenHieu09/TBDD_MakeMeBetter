import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from "./screens/Home";
import DetailArticle from './screens/DetailArticle';
import Podcast from "./screens/Podcast/Podcast";
import Notification from "./screens/Notification/Notification";
import Quotes from "./screens/Quotes/Quotes";
import Search from "./screens/Search/Search";
import Setting from "./screens/Setting/Setting";
import Bookmarks from "./screens/Bookmarks/Bookmarks";
import History from "./screens/History/History";
import Home from "./screens/Home/Home";
import SearchItem from "./screens/Search/SearchItem";


const Stack = createStackNavigator();
function Application(){
    return(
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    {/* stack lớn -> bao tất cả màn h */}
                    <Stack.Navigator 
                        initialRouteName="Home"
                    >
                        <Stack.Screen 
                            name="Home" 
                            component={Home}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen 
                            name="Make me better" 
                            component={DetailArticle}
                            options={{
                                headerShown: true
                            }}
                        />
                        
                        <Stack.Screen 
                            name="Podcast" 
                            component={Podcast}
                            options={{
                                headerShown: true
                            }}
                        />

                        <Stack.Screen 
                            name="Motivational Quotes" 
                            component={Quotes}
                            options={{
                                headerShown: true
                            }}
                        />
                        {/* <Stack.Screen 
                            name="Life hacks" 
                            component={Life}
                            options={{
                                headerShown: true
                            }}
                        /> */}

                        <Stack.Screen 
                            name="Search" 
                            component={Search}
                            options={{
                                headerShown: false
                            }}
                        />

                        <Stack.Screen 
                            name="item"  
                            component={SearchItem}
                            options={{
                                headerShown: false
                            }}
                        />

                        <Stack.Screen 
                            name="Settings" 
                            component={Setting}
                            options={{
                                headerShown: true
                            }}
                        />

                        <Stack.Screen 
                            name="Bookmarks"  
                            component={Bookmarks}
                            options={{
                                headerShown: true
                            }}
                        />
                        <Stack.Screen 
                            name="History"  
                            component={History}
                            options={{
                                headerShown: true
                            }}
                        />

                        <Stack.Screen 
                            name="Notification" 
                            component={Notification}
                            options={{
                                headerShown: true
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </PaperProvider>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,
    },
});
  
  
export default Application;