import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ArticleItem(props) {

    const {
        item
    } = props || {};

    const navigation = useNavigation();
    //xử lý history Read articles
    const goToDetail = useCallback(async () => {
        try {
            let history = await AsyncStorage.getItem('history');
            let parsedHistory = [];

            // Kiểm tra xem history có phải là chuỗi JSON hợp lệ không
            if (history) {
                parsedHistory = JSON.parse(history);
                if (!Array.isArray(parsedHistory)) {
                    parsedHistory = [];
                }
            }

            // Kiểm tra xem mục hiện tại đã tồn tại trong lịch sử chưa
            const existingItem = parsedHistory.find((historyItem) => historyItem.id === item.id);


            if (!existingItem) {
                // Nếu mục chưa tồn tại, thêm mục mới vào lịch sử
                parsedHistory.push(item);

                // Lưu lịch sử mới vào AsyncStorage
                await AsyncStorage.setItem('history', JSON.stringify(parsedHistory));
            }
        } catch (error) {
            console.error('Error saving to history:', error);
        }

        // Điều hướng đến màn hình chi tiết
        navigation.navigate("Make me better", item);
    }, [item, navigation]);


    return (
        //style phần data mh article
        // <TouchableOpacity 
        //     onPress={goToDetail}
        //     style={{justifyContent:'center',flex:1}}
        // >
        //   <View style={styles.item}>
        //      <Image
        //     style={{width:"97%", height:240,flex:1.2, marginLeft:5}}
        //     source={{uri:item.img}}
        //     resizeMode='cover'
        //     />
        //     <View style={{flexDirection:'column',flex:0.5, padding:5, justifyContent:'flex-end', marginLeft:-10}}>
        //         <Text style={{fontSize:18, fontWeight:'500', marginLeft:5}}>{item.title} </Text>
        //         <View style={{flexDirection:'row',marginTop:10,}}>
        //             <View style={{flex:3,flexDirection:'row', justifyContent:'flex-start'}}>
        //                 <Text style={{marginLeft:5, fontSize:14}}>{item.catetory} {'\u2022'}</Text>
        //                 <Text style={{fontSize:14}}>{item.date} {'\u2022'}</Text>
        //                 <Text style={{fontSize:14}}>{item.time}mins</Text>
        //             </View>
        //             <View style={{flex:0.5,flexDirection:'row', justifyContent:'flex-end'}}>
        //                 <Text style={{marginRight:5, fontSize:14}}>{item.like}</Text>
        //                 <Pressable style={{alignSelf:'center',}}>
        //                     <AntDesign name='heart' color={'#848484'} size={14}/>

        //                 </Pressable>
        //             </View>
        //         </View>

        //     </View>
        //     </View>  
        // </TouchableOpacity>
        <TouchableOpacity 
            onPress={goToDetail}
            style={{justifyContent:'center',flex:1}}
        >
          <View style={styles.item}>
             <Image
            style={{width:"97%", height:240,flex:1.2, marginLeft:5}}
            source={{uri:item.img}}
            resizeMode='cover'
            />
            <View style={{flexDirection:'column',flex:0.5, padding:5, justifyContent:'flex-end', marginLeft:-10}}>
                <Text style={{fontSize:18, fontWeight:'500', marginLeft:10}}>{item.title} </Text>
                <View style={{flexDirection:'row',marginTop:10, marginLeft:5, marginRight:5}}>
                    <View style={{flex:3,flexDirection:'row', justifyContent:'flex-start', }}>
                        <Text style={{marginLeft:5, fontSize:12}}>{item.catetory} {'\u2022'}</Text>
                        <Text style={{fontSize:12, textAlign:'justify'}}>{item.date} {'\u2022'}</Text>
                        <Text style={{fontSize:12}}>{item.time}mins</Text>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row', justifyContent:'flex-end',}}>
                        <Text style={{marginRight:5, fontSize:12}}>{item.like}</Text>
                        <Pressable style={{alignSelf:'center',}}>
                            <AntDesign name='heart' color={'#848484'} size={12}/>
                        </Pressable>
                    </View>
                </View>

            </View>
            </View>  
        </TouchableOpacity>
    );
}

export default ArticleItem;

const styles = StyleSheet.create({
    item:{
    // marginBottom: 10, 
    borderRadius:6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, 
    overflow:'hidden',
    marginTop:5,
    height:248,
    backgroundColor:'#FFF',
    
    
}
});
