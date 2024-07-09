import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function NotificationItem(props) {

    const {
        item
    } = props || {};

    const navigation = useNavigation();
    const goToDetail = useCallback(() => {

        navigation.navigate("Make me better", { ...item, isPressed2: true });
    }, [item, navigation]);

    const {
        title,
        img,
        date,
        like,
        catetory
    } = item || {};

    return (
        //style phần data mh article
        <TouchableOpacity 
            onPress={goToDetail}
        // style={{backgroundColor: "pink",marginBottom: 5}}
            style={{flex:1, marginBottom: 10, borderRadius:7,shadowColor: '#000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.25,shadowRadius: 4,elevation: 4, overflow:'hidden',
                    width:'100%', height:248, marginTop:5, backgroundColor:'#fff', marginLeft:2, marginRight:2}}
        >
            <View style={{flex:3,flexDirection:'column',justifyContent: "center",alignItems: "center", width:'100%', height:'100%', paddingBottom:8}}>
                <Image style={{width: '100%', height:180}}
                    // source ={require('../../../../../../../assets/image/Are you Lying to Yourself.jpg')}
                    source={{uri: img}}
                    resizeMode ='cover'
                />
            </View>
            <View style={{flex: 1,flexDirection: "column", marginTop:7,paddingHorizontal:8, justifyContent:'center'}}>
                <View style={{flex: 1 , justifyContent:'center'}}>
                    <Text style = {{fontSize:16, fontWeight:'600', color:'#000'}}>{title}</Text>
                </View>
                <View style = {{flex: 1,flexDirection:'row', paddingBottom:8, paddingTop:8,justifyContent:'space-between'}}>
                    <Text style = {{fontSize:12, fontWeight:'400', color:'#555555'}}>
                        {catetory} {'\u2022'}  
                        <Text> {date}</Text>
                    </Text>
                    
                    <View style = {{flexDirection:'row', justifyContent:'space-between', justifyContent:'center', alignItems:'center'}}>
                        <Text style = {{fontSize:12, fontWeight:'400', color:'#555555'}}>{like}</Text>
                        <View style={{padding:3}}></View>
                        <AntDesign name='heart' size={13} color={'#888888'}/>
                    </View>

                </View>
            </View>
    </TouchableOpacity>
    );
}

export default NotificationItem;