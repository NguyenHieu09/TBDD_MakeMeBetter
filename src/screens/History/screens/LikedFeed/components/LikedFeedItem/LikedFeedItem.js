import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'




function LikedFeedItem(props) {


    const {item, likedItems, onLike} = props || {};

    const navigation = useNavigation();
    
    const {
        content,
        img,
        date,

    } = item || {};
    const handleHeartPress = (likedItem) => {
        setIsHearted(!isHearted); // Toggle the like status
        // const isLiked = !!likedStatus[likedItem.id]; // Kiểm tra xem mục đã được like hay chưa
        // setLikedStatus(prevStatus => ({
        //     ...prevStatus,
        //     [likedItem.id]: !isLiked // Đảo ngược trạng thái like khi nhấn nút
        // }));
        // onLike(likedItem, !isLiked);
    };

    const openWhatsApp = () => {
        const whatsappLink = 'https://web.whatsapp.com/';
        // Mở liên kết
        Linking.openURL(whatsappLink);
    };
    const openTwitter = () => {
        const twitterLink = 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D';
        // Mở liên kết
        Linking.openURL(twitterLink);
    };
    const openFB = () => {
        const fbLink = 'https://www.facebook.com/login/';
        // Mở liên kết
        Linking.openURL(fbLink);
    };
    const openIns = () => {
        const insLink = 'https://www.instagram.com/accounts/login/';
        // Mở liên kết
        Linking.openURL(insLink);
    };

    return (


        <View style={{flex:1, marginBottom: 10, borderRadius:7,shadowColor: '#000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.25,shadowRadius: 4,elevation: 4,
                        width:'100%', height:'100%', marginTop:5}}>
                 <View style={{flex:2,flexDirection:'column',justifyContent: "center",alignItems: "center", width:'100%', height:'100%', paddingHorizontal:5}}>
                    <Image style={{width: '100%', height:250}}
                        // source ={require('../../../../../../../assets/image/Are you Lying to Yourself.jpg')}
                        source={{uri: img}}
                        resizeMode ='cover'
                    />
                </View>
                <View style={{flex: 1,flexDirection: "column", marginTop:7,paddingHorizontal:8, justifyContent:'center'}}>
                    <View style={{flex: 2, overflow:'scroll', justifyContent:'center'}}>
                        <Text style = {{fontSize:15, fontWeight:'400', color:'#000'}}>{content}</Text>
                    </View>
                    <View style = {{flex: 1,flexDirection:'row', paddingBottom:8, paddingTop:8,justifyContent:'space-between'}}>
                            <Text> {date}</Text>
                    </View>
                    <View style = {{flex:1,justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom:10}}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                                <TouchableOpacity style={{marginRight:15}} onPress={openFB}>
                                    <Fontisto name='share' size={26} color={'#347CFF'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight:15}} onPress={openTwitter}>
                                    <AntDesign name='twitter' size={26} color={'#5691FD'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight:15}} onPress={openFB}>
                                    <Entypo name='facebook' size={26} color={'#2459BF'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight:15}} onPress={openIns}>
                                    <Image 
                                        style = {{height:26, width:26}}
                                        source={require('../../../../../../../assets/image/instagram.png')}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight:8}} onPress={openWhatsApp}>
                                    <Image 
                                        style = {{height:26, width:26}}
                                        source={require('../../../../../../../assets/image/whatsapp.png')}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>
                            </View>
                        
                    </View>
                </View>

        </View>
    );
};
export default LikedFeedItem;