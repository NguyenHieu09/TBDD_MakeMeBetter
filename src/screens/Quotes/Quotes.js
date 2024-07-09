import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getListFeed } from '../../services/feed';
import QuotesItem from './screens/Quotes/components/QuotesItem/QuotesItem';
import SuggestedItem from './screens/Suggested/components/SuggestedItem/SuggestedItem';
import DataList from '../Home/components/DataList';
import Footer from './components/Footer';
import { ScrollView } from 'react-native-gesture-handler';


function Quotes(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Suggested");

    return (
        <View style={{ flex: 1 }}>
            <View vertical={true} style = {{flex:1}}>
                
                {selectedTab === "Suggested" && (
                    <DataList service={getListFeed} keyName="id" params={params} component={SuggestedItem} />
                )}
                {selectedTab === "Quotes" && (
                    <DataList service={getListFeed} keyName="id" params={params} component={QuotesItem} />
                )}
            </View>
            <View style = {{bottom:0, position:'fixed', width:'100%'}}>
                <Footer
                    navigation={navigation}
                    route={route}
                    onSelectTab={(tab) => setSelectedTab(tab)}
                />
            </View>
        </View>
    );
};

export default Quotes;
