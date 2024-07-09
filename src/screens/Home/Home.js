import React, { useMemo, useRef } from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerContent from './components/DrawerContent/components';
import Header from './components/Header';
import Article from './screens/Article';
import DrawerContent from './components/DrawerContent';
import Feed from './screens/Feed/Feed';

const Drawer = createDrawerNavigator();

function Home(props) {

    const screenOptions = useMemo(() => {

        return {
            header: (props) => {

                return (
                    <Header {...props}/>
                );
            },
            headerMode: "float"
        };
    }, [Header]);

    return (
        <View style={{
            flex: 1,
        }}>
            <Drawer.Navigator 
                initialRouteName='Article'
                drawerContent={DrawerContent}
                screenOptions={screenOptions}
            >
                <Drawer.Screen name="Article" component={Article} />
                <Drawer.Screen name="Feed" component={Feed} />
            </Drawer.Navigator>
        </View>
    );
}

export default Home;