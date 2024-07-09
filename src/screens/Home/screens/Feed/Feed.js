import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DataList from '../../components/DataList';


import Footer from '../../components/Footer';
import { getListFeed } from '../../../../services/feed';
import FeedItem from './components/FeedItem/FeedItem';
import useFeed from './hooks/useFeed';
import { ScrollView } from 'react-native-gesture-handler';

function Feed(props) {

    const {
        navigation,
        route
    } = props || {};
    
    const {
        params
    } = route || {};

    const {
    } = useFeed({

    });
    
    return (
        //load data từ api dựa theo params + footer
        <View style={{flex: 1}}>
        
                <DataList 
                    service={getListFeed}
                    keyName="id"
                    params={params}
                    component={FeedItem}

                />
            
            <Footer navigation={navigation} route={route}/>
        </View>
        
    );
}

export default Feed;