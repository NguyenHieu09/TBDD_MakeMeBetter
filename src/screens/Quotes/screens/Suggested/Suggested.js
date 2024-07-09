import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DataList from '../../../Home/components/DataList';
import Footer from '../../components/Footer';
import SuggestedItem from './components/SuggestedItem/SuggestedItem';
import { getListFeed } from '../../../../services/feed';




function Suggested(props) {

    // const {
    //     navigation,
    //     route
    // } = props || {};
    
    // const {
    //     params
    // } = route || {};

 

    // return (
    //     //load data từ api dựa theo params + footer
    //     <View style={{flex: 1}}>
    //         <DataList 
    //             service={getListFeed}
    //             keyName="id"
    //             params={params}
    //             component={FeedItem}
    //         />
    //         {/* <Footer_Quotes navigation={navigation} route={route}/> */}
    //         <Footer navigation={navigation} route={route}/>
    //     </View>
        
    // );
    
// }
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Suggested");
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.setOptions({
                title: 'Motivation Quotes',
            });
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            {selectedTab === "Suggested" && (
                <DataList service={getListFeed} keyName="id" params={params} component={SuggestedItem} />
            )}
            <Footer
                navigation={navigation}
                route={route}
                onSelectTab={(tab) => setSelectedTab(tab)}
            />
        </View>
    );
};

export default Suggested;