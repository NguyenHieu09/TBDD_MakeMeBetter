import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getListFeed } from '../../../../services/feed';


import FeedItem from './components/FeedItem/FeedItem';

import DataList from '../../../Home/components/DataList';
import Footer from '../../componets/Footer';




function Feed(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Feeds");

    return (
        <View style={{ flex: 1 }}>
            {selectedTab === "Feeds" && (
                <DataList service={getListFeed} keyName="id" params={params} component={FeedItem} />
            )}
            {/* <Footer
                navigation={navigation}
                route={route}
                onSelectTab={(tab) => setSelectedTab(tab)}
            /> */}
        </View>
    );
};
export default Feed;