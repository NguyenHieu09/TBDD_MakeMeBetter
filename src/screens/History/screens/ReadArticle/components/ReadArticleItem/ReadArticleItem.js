import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ReadArticleItem(props) {
    const {item} = props || {};

    const navigation = useNavigation();
    
    const {
        title,
        img,
        catetory,
        date,
    } = item || {};
    // const goToDetail = useCallback(() => {

    //     navigation.navigate("Make me better", item);
    // }, [item, navigation]);
    const [viewedItems, setViewedItems] = useState([]);

    useEffect(() => {
        const fetchViewedItems = async () => {
            try {
                const history = await AsyncStorage.getItem('history');
                let parsedHistory = JSON.parse(history) || [];

                // Loại bỏ các mục trùng lặp trong lịch sử dựa trên id của mỗi item
                const uniqueViewedItems = Array.from(new Set(parsedHistory.map(item => item.id)))
                    .map(id => parsedHistory.find(item => item.id === id));

                setViewedItems(uniqueViewedItems);
            } catch (error) {
                console.error('Error fetching viewed items:', error);
            }
        };

        fetchViewedItems();
    }, []);

    return (
        <View>
        {viewedItems.map((viewedItem, index) => (
            <TouchableOpacity
                key={index}
                style={{ borderBottomColor:'#D8D8D8', borderBottomWidth:1, flexDirection:'row',
                        width:'95%', height:92, marginLeft:8, backgroundColor:'#fff'}}
                onPress={() => navigation.navigate("Make me better", viewedItem)}
            >
                <View style={{flex:2, justifyContent:'center', paddingHorizontal:10}}>
                    <Text style={{fontSize:14}}>{viewedItem.title}</Text>
                    <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                        <Text style={{fontSize:12, color:'blue'}}>{viewedItem.catetory}</Text>
                        <Text style={{fontSize:12, color:'#373737'}}>{viewedItem.date}</Text>
                    </View>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Image
                        style={{width:'100%', height:'75%', borderRadius:4}}
                        source={{uri: viewedItem.img}}
                        resizeMode='cover'
                    />
                </View>
            </TouchableOpacity>
        ))}
    </View>
        
    );
};
export default ReadArticleItem;