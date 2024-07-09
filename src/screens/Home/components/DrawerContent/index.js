import React, { useCallback, useState } from 'react';
import { View, Text, Pressable,StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
// import Profile from './components/Profile';
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import Iconicon from 'react-native-vector-icons/Ionicons'
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';

function DrawerContent(props) {
      const {
        navigation
    } = props || {};

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [textChanged, setTextChanged] = useState(false);


  const [showAlternateView, setShowAlternateView] = useState(false);


  const openLoginModal = () => {
    setModalVisible(true);
    setModalType('login');
  };

  const openShareModal = () => {
    setModalVisible(true);
    setModalType('share');
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };




    return (
        <DrawerContentScrollView {... props} contentContainerStyle={{}}>
          <View style={{backgroundColor:'red',height:100, paddingLeft:10}}>
            <Image
            style={{width:60, height:60}}
            source ={require('../../../../../assets/image/account.png')}
            resizeMode ='contain'
            />
            <Pressable onPress={openLoginModal} >
              {/* <Text style={styles.text}>
                Hello, user
              </Text> */}
              <Text style={styles.text}>{textChanged ? 'Hello, Nguyễn Hiếu' : 'Hello, User'}</Text>
              <Text style={styles.text1}>{textChanged ? 'hieu92145@gmail.com' : 'Sign In/Sign up'}</Text>
            </Pressable>

            <Modal
          isVisible={isModalVisible && modalType === 'login'}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          onSwipeComplete={toggleModal}
          swipeDirection="down"
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={[styles.modal,{minHeight:300}]}
        >
          <View style={styles.modalContent}>
          {showAlternateView ? (
          // View thứ nhất
            <View style={{justifyContent:'center', alignSelf:'center', marginTop:15}}>
              <Text style={{textAlign:'center', color:'blue', fontSize:22, marginTop:10}}>Hello, Nguyễn A</Text>
              <Text style={{textAlign:'center', fontSize:15, marginTop:15}}>Nguyen123@gmail.com</Text>
              <Text style={{textAlign:'center', color:'gray', fontSize:20, marginTop:15}}>Do you want to Log Out</Text>
              {/* <View style={{borderWidth:0.005, borderColor:'#C0C0C0', marginBottom:10}}></View> */}
              
              <TouchableOpacity
               onPress={()=>
                {
                  closeModal();
                  setTextChanged(!textChanged);
                  setShowAlternateView(false);
                }
                }
              >
                <Text style={{textAlign:'center', color:'blue', fontSize:20, marginTop:15}}>Log out</Text>
              </TouchableOpacity>
              {/* <View style={{borderWidth:0.005, borderColor:'#C0C0C0', marginBottom:10}}></View> */}

              <TouchableOpacity onPress={closeModal}>
                <Text style={{textAlign:'center', color:'gray', fontSize:20, marginTop:15}}>Cancel</Text>
              </TouchableOpacity>


            </View>
            ) : (
              <View>
              <Text style={{ color: '#0000FF', fontSize: 25, marginBottom: 10 }}>Login to continue</Text>
              <Text>Login is required for:</Text>
              <Text>1. Subscription management</Text>
              <Text>2. Bookmarks management</Text>
              <Text>3. Syncing bookmarks, reading list, and other data between devices</Text>
              <TouchableOpacity style={styles.btn} 
            onPress={()=>
              {
                closeModal();
                setTextChanged(!textChanged);
                setShowAlternateView(true);
              }
              }
            >
              <View style={styles.contentBtn}>
                <Image
                  source={require('../../../../../assets/image/search.png')}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ fontSize: 20, color: '#848484', textAlign: 'center', marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity>
            </View>


            )}

            {/* <TouchableOpacity style={styles.btn} 
            onPress={()=>
              {
                closeModal();
                setTextChanged(!textChanged);
                setShowAlternateView(true);
              }
              }
            >
              <View style={styles.contentBtn}>
                <Image
                  source={require('../../../../../assets/image/search.png')}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ fontSize: 20, color: '#848484', textAlign: 'center', marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity> */}
          </View>
        </Modal>

          </View>
        
          <View>
          <DrawerItem
            label="Podcast"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <MaterialCommunityIcons name="headphones" color={"#4E4E4E"} size={23} />
            )}
            onPress={() => navigation.navigate('Podcast')}
          />

          <DrawerItem
            label="Motivational Quotes"
            onPress={() => {
              // Xử lý khi nhấn Motivational Quotes
              navigation.navigate('Motivational Quotes')
            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconAwe name="quote-left" color={'#4E4E4E'} size={23} />
            )}
          />

          {/* <DrawerItem
            label="Life hacks"
            onPress={() => {
              // Xử lý khi nhấn Life hack
              navigation.navigate('Life hacks')
              
            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <MaterialCommunityIcons name="head-lightbulb" color={"#4E4E4E"} size={23} />
            )}
          /> */}

          <DrawerItem
            label="Search"
            onPress={() => {
              // Xử lý khi nhấn Search
              navigation.navigate('Search')
              
            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconAntDesign name="search1" color={"#4E4E4E"} size={23} />
            )}
          />



          <DrawerItem
            label="Settings"
            onPress={() => {
              // Xử lý khi nhấn Settings
              navigation.navigate('Settings')

            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <Iconicon name="settings" color={"#4E4E4E"} size={23} />
            )}
          />

          <View style={{borderWidth:1, borderColor:'#ccc'}}>

          </View>
          <Text style={styles.item}>Your Activity</Text>
          
          <DrawerItem
            label="Bookmarks"
            onPress={() => {
              navigation.navigate('Bookmarks');

            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconAwe name="bookmark" color={"#4E4E4E"} size={23} />
            )}
          />

          <DrawerItem
            label="History"
            onPress={() => {
              navigation.navigate('History');

            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <Iconicon name="reload" color={"#4E4E4E"} size={23} />
            )}
          />

            <DrawerItem
            label="Notification"
            onPress={() => {
              // Xử lý khi nhấn Settings
              navigation.navigate('Notification')

            }}
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconMater name="notifications-on" color={"#4E4E4E"} size={23} />
            )}
          />
          <View style={{borderWidth:1, borderColor:'#ccc'}}>
          </View>
          <Text style={styles.item}>Theme</Text>
          <DrawerItem
            label="System Default"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <MaterialCommunityIcons name="theme-light-dark" color={"#4E4E4E"} size={23} />
            )}
            onPress={() => alert('Podcast')}
          />

          <DrawerItem
            label="Dark"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconMater name="bedtime" color={"#4E4E4E"} size={23} />

            )}
            // onPress={() => navigation.navigate('Postcast')}
          />
        </View>

        <View>
        


          <View style={{borderWidth:1, borderColor:'#ccc'}}>
          </View>
          <Text style={styles.item}>Communication</Text>
          <DrawerItem
            label="Suggestion"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <MaterialCommunityIcons name="lightbulb-on" color={"#4E4E4E"} size={23} />

            )}
            onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new')}

          />

          <DrawerItem
            label="Share app"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <Entypo name="share" color={"#4E4E4E"} size={23} />

            )}
            onPress={openShareModal}
          />
        <Modal
          isVisible={isModalVisible && modalType === 'share'}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          onSwipeComplete={toggleModal}
          swipeDirection="down"
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={styles.modal}
        >
          <View style={[styles.modalContent, {minheight:200}]}>
              <Text style={{fontSize:22, color:'#848484', fontWeight:'600'}}>Share Link via</Text>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:15}}>
              <Pressable  
            onPress={() => Linking.openURL('https://www.facebook.com')}
              
              style={{flex:1,width:50, height:70, textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <Image
                  source={require('../../../../../assets/image/facebook.png')}
                  style={styles.image}
                />
                <Text style={{fontSize:12}}>Bảng tin</Text>
              </Pressable>

              <Pressable 
                onPress={() => Linking.openURL('https://twitter.com/')}

              style={{flex:1,width:50, height:70, textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <Image
                  source={require('../../../../../assets/image/twitter.png')}
                  style={styles.image}
                />
                <Text style={{fontSize:12}}>Bài viết</Text>
              </Pressable>

              <Pressable 
                onPress={() => Linking.openURL('https://www.instagram.com')}

              style={{flex:1,width:50, height:70, textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <Image
                  source={require('../../../../../assets/image/instagram.png')}
                  style={styles.image}
                />
                <Text style={{fontSize:12}}>Bảng tin</Text>
              </Pressable>

              <Pressable
                onPress={() => Linking.openURL('https://www.messenger.com/')}

               style={{flex:1,width:50, height:70, textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <Image
                  source={require('../../../../../assets/image/messenger.png')}
                  style={styles.image}
                />
                <Text style={{fontSize:12}}>Đoạn chat</Text>
              </Pressable>
              
              </View>
            
          </View>
        </Modal>

          <DrawerItem
            label="Rate us"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: -25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            icon={() => (
              <IconAwe name="star" color={"#4E4E4E"} size={23} />

            )}
            onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=app.story.craftystudio.shortstory')}

          />

          <DrawerItem
            label="Privacy Policy"
            activeBackgroundColor="#DDDDDD"
            activeTintColor="#3C3C3C"
            labelStyle={{
              marginLeft: 25,
              marginTop: -5,
              fontSize: 16,
              fontWeight: '600',
            }}
            
            onPress={() => Linking.openURL('https://www.makemebetter.net/privacy-policy/')}

          />
        </View>
      </DrawerContentScrollView>
    //   </View>
    );
}


export default DrawerContent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#cccc",
    },
  
    text:{
      color:'white',
      fontSize:16,
      fontWeight:'bold'
    },
  
    text1:{
      color:'#EDE6E6',
      fontSize:14,
      textDecorationLine:'underline'
    },

    //style model
    modal: {
      justifyContent: "flex-end",
      margin: 0,
    },
    modalContent: {
      backgroundColor: "#fff",
      paddingTop: 12,
      paddingHorizontal: 12,
      // borderTopRightRadius: 20,
      // borderTopLeftRadius: 20,
      paddingBottom: 20,
      justifyContent:'center',
      // alignItems: 'center',
    },

    item:{
      marginLeft:10, 
      marginTop:15, 
      color:'#A5A5A5', 
      fontWeight:'500'
  },

  btn:{
    marginTop:20,
    borderRadius:5,
    width:350,
    height:50,
    // borderWidth:1,
    // backgroundColor:'red',
    justifyContent:'center',
    // alignItems: 'center',
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.22,
    shadowRadius: 3.22,
    
    elevation: 3,
  },

  contentBtn:{
    textAlign: 'center',
    flexDirection:'row',
    justifyContent:'center'
  }, 
  image:{
    width:30,
    height:30, 
    marginBottom:10
  }

    
  });