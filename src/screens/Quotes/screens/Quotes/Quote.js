import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getListFeed } from '../../../../services/feed';
import DataList from '../../../Home/components/DataList';
import Footer from '../../components/Footer';
import QuotesItem from './components/QuotesItem/QuotesItem';



function Quote(props) {

//     const {
//         navigation,
//         route
//     } = props || {};
    
//     const {
//         params
//     } = route || {};

 

//     return (
//         //load data từ api dựa theo params + footer
//         <View style={{flex: 1}}>
//             <DataList 
//                 service={getListFeed}
//                 keyName="id"
//                 params={params}
//                 component={FeedItem}
//             />
//             {/* <Footer_Quotes navigation={navigation} route={route}/> */}
//             <Footer navigation={navigation} route={route}/>
//         </View>
        
//     );
// }
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Quotes");

    return (
        <View style={{ flex: 1 }}>
            {selectedTab === "Quotes" && (
                <DataList service={getListFeed} keyName="id" params={params} component={QuotesItem} />
            )}
            <Footer
                navigation={navigation}
                route={route}
                onSelectTab={(tab) => setSelectedTab(tab)}
            />
        </View>
    );
};
export default Quote;