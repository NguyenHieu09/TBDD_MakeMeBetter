import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import { Linking } from 'react-native';
// import { Modal } from 'react-native';
// import { SwitchBase } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View,Switch, Pressable, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
// import { RadioButton } from 'react-native-radio-buttons-group';
import RadioForm, { RadioButtonInput, RadioButtonLabel,RadioButton } from 'react-native-simple-radio-button';



export default function Setting() {

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);

  const openLoginModal = () => {
    setModalVisible(true);
    setModalType('login');
  };

  const openFontModal = () => {
    setModalVisible(true);
    setModalType('font');
  };

  const openVoiceModal1 = () => {
    setModalVisible(true);
    setModalType('voice1');
  };

  const openVoiceModal2 = () => {
    setModalVisible(true);
    setModalType('voice2');
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [isEnabled2, setIsEnabled2] = React.useState(true);
  const [isEnabled3, setIsEnabled3] = React.useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const [value, setValue] = React.useState(2);
  const [value1, setValue1] = React.useState(1);

  const items = [
    { label: 'X Small', value: 0 },
    { label: 'Small', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Large', value: 3 },
    { label: 'X Large', value: 4 }
  ];

  const itemsVoice = [
    { label: 'Slow', value: 0 },
    { label: 'Normal', value: 1 },
    { label: 'Fast', value: 2 },
  ];

  const itemsVoicePitch = [
    { label: 'Low Pitch', value: 0 },
    { label: 'Normal', value: 1 },
    { label: 'High Pitch', value: 2 },
  ];

  const onPressValue = (index) => {
    setValue(index);
  };

  const onPressValue1 = (index) => {
    setValue1(index);
  };

  const [selectedLabel, setSelectedLabel] = React.useState('Medium');
  const [selectedLabel1, setSelectedLabel1] = React.useState('Normal');
  const [selectedLabel2, setSelectedLabel2] = React.useState('Normal');
  // const [selectedLabel3, setSelectedLabel3] = React.useState('');
  
  return (
    <ScrollView style={styles.container}>
      <View style={{marginLeft:20, marginRight:20}}>
          <View>
          <Text style={styles.tieude}>Account</Text>
          <Pressable onPress={openLoginModal}>
            <Text style={styles.detail}>Sign in</Text>
          </Pressable>
            
        </View>

        <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15}}></View>

      {/* xử lý switch  */}

       <TouchableOpacity 
       onPress={toggleSwitch1}
       style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:5}}>
        <Text style={[styles.detail,{marginTop:0}]}>Save Browsing History</Text>
        <Switch
          trackColor={{false: '#ccc', true: '#90C3F1'}}
          thumbColor={isEnabled1 ? '#2279CA' : '#F3F3F3'}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
       </TouchableOpacity>

       <Text style={styles.tieude}>Notification</Text>

       <TouchableOpacity 
       onPress={toggleSwitch2}
       style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:5}}>
        <Text style={[styles.detail, {marginTop:0}]}>Push Notification</Text>
        <Switch
          trackColor={{false: '#ccc', true: '#90C3F1'}}
          thumbColor={isEnabled2 ? '#2279CA' : '#F3F3F3'}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
       </TouchableOpacity>

       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:10}}></View>


       <TouchableOpacity 
       onPress={toggleSwitch3}
       style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:5}}>
        <Text style={[styles.detail, {marginTop:0}]}>Always Show Notification Silently</Text>
        <Switch
          trackColor={{false: '#ccc', true: '#90C3F1'}}
          thumbColor={isEnabled3 ? '#2279CA' : '#F3F3F3'}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
       </TouchableOpacity>


        <Text style={styles.tieude}>Fonts</Text>
       <TouchableOpacity onPress={openFontModal}>
        <Text style={styles.detail}>Font size</Text>
        <Text style={{color:'gray', fontSize:14}}>{selectedLabel}</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={openVoiceModal1}>
        <Text style={styles.detail}>Voice Speed</Text>
        <Text style={{color:'gray', fontSize:14}}>{selectedLabel1}</Text>
       </TouchableOpacity>

       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15}}></View>



       <TouchableOpacity onPress={openVoiceModal2}>
        <Text style={styles.detail}>Voice Pitch</Text>
        <Text style={{color:'gray', fontSize:14}}>{selectedLabel2}</Text>
       </TouchableOpacity>


       <Text style={[styles.tieude,{marginBottom:15}]}>Similar Apps</Text>
       <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@MakeMeBetter')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/youtube.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>Make Me Better is now on Youtube t..</Text>
          <Text style={{fontSize:13, color:'gray'}}>Want to lean new things? Watch our personality 
            development and motivational videos on youtube.</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>

       <TouchableOpacity >
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/account.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>MakeMeBetter.net</Text>
          <Text style={{fontSize:13, color:'gray'}}>Visit Make me Better website om-the-go anywhere.
          Get the betst experience across all device</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>



       <Text style={[styles.tieude,{marginBottom:15}]}>Social Media</Text>
       <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/instagram.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>Instagram</Text>
          <Text style={{fontSize:13, color:'gray'}}>Follow us on Instagram @makemebetter_app.</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>

       <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/whatsapp.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>WhatsApp</Text>
          <Text style={{fontSize:13, color:'gray'}}>Follow our WhatsApp group for daily quotes and other updates</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>


       <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/facebook.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>Facebook</Text>
          <Text style={{fontSize:13, color:'gray'}}>Follow us on Facebook for latest updates and quotes</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>

       <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/twitter.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>Twitter</Text>
          <Text style={{fontSize:13, color:'gray'}}>Follow us on Twitter for interesting updates</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>


       <TouchableOpacity onPress={() => Linking.openURL('https://t.me/makeme_better')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image
        style={{width:50, height:50, flex:0.4, marginRight:15}}
        source={require('../../../assets/image/telegram.png')}
        resizeMode='contain'
        />
        <View style={{flex:2}}>
          <Text style={{fontSize:15,fontWeight:400}}>Telegram</Text>
          <Text style={{fontSize:13, color:'gray'}}>Follow our Telegram Channel for daily quotes and other updates</Text>
        </View>
        </View>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>
       
       <Text style={styles.tieude}>
        Communication
       </Text>

       <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=app.story.craftystudio.shortstory')}>
        <Text style={styles.detail}>Rate us</Text>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>


       <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new')}>
        <Text style={styles.detail}>Suggestion</Text>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>


       <TouchableOpacity onPress={() => Linking.openURL('https://www.makemebetter.net/privacy-policy/')}>
        <Text style={styles.detail}>Privacy Policy</Text>
       </TouchableOpacity>
       <View style={{borderWidth:0.3, borderColor:'#ccc', marginTop:15, marginBottom:15}}></View>

       </View>

{/*xử lý modal */}

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
            <Text style={{ color: '#0000FF', fontSize: 25, marginBottom: 10 }}>Login to continue</Text>
            <Text>Login is required for:</Text>
            <Text>1. Subscription management</Text>
            <Text>2. Bookmarks management</Text>
            <Text>3. Syncing bookmarks, reading list, and other data between devices</Text>
            <TouchableOpacity style={styles.btn} onPress={closeModal}>
              <View style={styles.contentBtn}>
                <Image
                  source={require('../../../assets/image/search.png')}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ fontSize: 20, color: '#848484', textAlign: 'center', marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={isModalVisible && modalType === 'font'}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          onSwipeComplete={toggleModal}
          animationIn="fadeIn"
          animationOut="fadeOut"
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={[styles.modalFont,{height:700}]}
        >
          <View style={styles.modalFontContain}>
            <Text style={{fontSize:23, fontWeight:'500', paddingTop:10, paddingLeft:20,marginBottom:10 }}>Font Size</Text>
            <RadioForm formHorizontal={false} animation={true}>
        {items.map((obj, i) => (
          <View key={i}>
            <RadioButton style={{marginBottom:30, marginLeft:20}}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={i === value}
                onPress={()=>{
                  onPressValue(i); 
                  closeModal();
                  setSelectedLabel(obj.label);
                }}
                buttonInnerColor={'green'}
                buttonOuterColor={'gray'}
                buttonSize={15}
                // buttonOuterSize={12}
                // buttonStyle={{}}
                buttonWrapStyle={{ marginRight: 20 }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
               
                labelStyle={{ fontSize: 20, color: 'black', paddingTop:5 }}
                // labelWrapStyle={{}}
              />
            </RadioButton>
            {/* <Text>{obj.label}</Text> */}
          </View>
        ))}
      </RadioForm>
            
          </View>
        </Modal>


        <Modal
          isVisible={isModalVisible && modalType === 'voice1'}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          onSwipeComplete={toggleModal}
          animationIn="fadeIn"
          animationOut="fadeOut"
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={[styles.modalFont,{minHeight:330}]}
        >
          <View style={styles.modalFontContain}>
            <Text style={{fontSize:23, fontWeight:'500', paddingTop:10, paddingLeft:20,marginBottom:10 }}>Font Size</Text>
            <RadioForm formHorizontal={false} animation={true}>
        {itemsVoice.map((obj, i) => (
          <View key={i}>
            <RadioButton style={{marginBottom:29, marginLeft:20}}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={i === value1}
                onPress={()=>{
                  onPressValue1(i); 
                  closeModal();
                  setSelectedLabel1(obj.label);
                }}
                buttonInnerColor={'green'}
                buttonOuterColor={'gray'}
                buttonSize={15}
                // buttonOuterSize={12}
                // buttonStyle={{}}
                buttonWrapStyle={{ marginRight: 20 }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
               
                labelStyle={{ fontSize: 20, color: 'black', paddingTop:5 }}
                // labelWrapStyle={{}}
              />
            </RadioButton>
            {/* <Text>{obj.label}</Text> */}
          </View>
        ))}
      </RadioForm>
            
          </View>
        </Modal>



        <Modal
          isVisible={isModalVisible && modalType === 'voice2'}
          onBackdropPress={closeModal}
          onBackButtonPress={closeModal}
          onSwipeComplete={toggleModal}
          animationIn="fadeIn"
          animationOut="fadeOut"
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={[styles.modalFont,{minHeight:330}]}
        >
          <View style={styles.modalFontContain}>
            <Text style={{fontSize:23, fontWeight:'500', paddingTop:10, paddingLeft:20,marginBottom:10 }}>Font Size</Text>
            <RadioForm formHorizontal={false} animation={true}>
        {itemsVoicePitch.map((obj, i) => (
          <View key={i}>
            <RadioButton style={{marginBottom:29, marginLeft:20}}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={i === value1}
                onPress={()=>{
                  onPressValue1(i); 
                  closeModal();
                  setSelectedLabel2(obj.label);
                }}
                buttonInnerColor={'green'}
                buttonOuterColor={'gray'}
                buttonSize={15}
                // buttonOuterSize={12}
                // buttonStyle={{}}
                buttonWrapStyle={{ marginRight: 20 }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
               
                labelStyle={{ fontSize: 20, color: 'black', paddingTop:5 }}
                // labelWrapStyle={{}}
              />
            </RadioButton>
            {/* <Text>{obj.label}</Text> */}
          </View>
        ))}
      </RadioForm>
            
          </View>
        </Modal>

    </ScrollView> 



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent:{
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 12,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    paddingBottom: 20,
    justifyContent:'center',
    // alignItems: 'center',
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
  },
  modalFont:{
    justifyContent: "center",
    margin: 0,
    width:'80%',
    alignSelf:'center'
  },

  modalFontContain:{
    backgroundColor: "#fff",
  },
  tieude:{
    marginTop:15,
    color:'blue', 
    fontWeight:'500'
  },
detail:{
  fontSize:16, 
  marginTop:15, 
  // marginBottom:15
}
});

