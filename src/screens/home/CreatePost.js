import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';



const { width, height } = Dimensions.get("window");

const CreatePost = ({navigation}) => {

  
  const [elementVisible, setElementVisible] = useState(true);
  const [image, setImage] = useState("../../assets/img/recyclerview/placeholder.jpg");
  const imagePicker = async () => {

    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    catch (error) { }

    console.log(result);
    setImage(result.assets[0].uri);
  };

  const openMap = () => {
    // return Maps;
    console.log("display map")
  }

  return (
    <View
    style={{
      flex: 1,
      width: width,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: COLORS.bgColor,
    }}>
       <View id={'imagecontainer'} style={{
      
        width: 1.03*width,
        height: 0.5825*width,
        backgroundColor: '#34363A', 
       }}>
        <Image source={require('../../../src/assets/img/recyclerview/placeholder.jpg')} style={{
          height: 0.5825*width,
          objectFit: 'cover',
        }}/>
          <View style={{
        width: width,
        position: 'absolute',
        height: 0.5825*width,
        backgroundColor: '#000000', 
        opacity:0.65,
       }}/>

    </View> 
          
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: width,
        zIndex: 5,
        position: 'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',

      }}>
           
          <Image source ={require('../../assets/icons/close.png')}
            style = {{
              width: 38,
              height: 38,
            
              marginTop: 38,
              marginLeft: 20,
              tintColor: '#fff'}}
            onPress={() => navigation.goBack()} />
             <TouchableOpacity style={{
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 33,
          backgroundColor: '#2F80AD',
          alignSelf: 'right',
          marginHorizontal: '1%',
          marginBottom: 6,
          justifyContent: 'center',
          marginLeft: 250, 
          marginTop: 35,
          height: 0.1076*width,
          width: 0.197*width,
          textAlign: 'center',
        }} >
          <Text style={{
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              fontWeight: '500',
              color: '#fff',
          }}>Post</Text>
        </TouchableOpacity></View>

  

      {
        elementVisible ? (
          <TouchableOpacity style={{
            zIndex: 52,
            paddingHorizontal: 15,
            paddingVertical: 6,
            borderRadius: 33,
            borderColor: '#fff',
            borderWidth: 2,
            alignSelf: 'center',
            marginHorizontal: '1%',
            marginBottom: 6,
            justifyContent: 'center',
            marginLeft: 14,
            marginTop: -120,
            height: 0.11 * width,
            width: 0.7435 * width,
            textAlign: 'center',
          }}
            onPress={() => {
              imagePicker();
              setElementVisible(!elementVisible);
            }}
          >
            <Text style={{
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              fontWeight: '500',
              color: '#fff',
            }}>Upload Display Image</Text>
          </TouchableOpacity>

        ) :
          (<TouchableOpacity style={{
            zIndex: 52,
            paddingHorizontal: 15,
            paddingVertical: 6,
            borderRadius: 33,
            borderColor: '#fff',
            borderWidth: 2,
            alignSelf: 'center',
            marginHorizontal: '1%',
            marginBottom: 6,
            justifyContent: 'center',
            marginLeft: 14,
            marginTop: -120,
            height: 0.11 * width,
            width: 0.7435 * width,
            textAlign: 'center',
          }}
            onPress={() => {
              imagePicker();
            }}
          >
            <Text style={{
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              fontWeight: '500',
              color: '#fff',
            }}>Change Display Image</Text>
          </TouchableOpacity>)
      }
   
    
        <View style={{
      backgroundColor:'#34363A',
      opacity: 0.96,
      zIndex:4,
      alignSelf: 'center',
      width: 0.84*width,
      // position: 'absolute',
      height: 0.718*width,
      marginTop: 0.215*width,
      borderRadius: 24,
  
    }}
  >
       <View style={{
     flexDirection: 'column',
      // alignSelf: 'left',
      // alignItems: 'left',
     
      marginTop: -0.135*width,
      borderRadius: 24,}}>
    <Text style={{
        color:'#b4b4b4',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 20,
        fontWeight: '900',
      }}>An Interesting Title </Text>
            
        <TouchableOpacity style={{
         
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 33,
          borderColor: '#fff',
          borderWidth: 2,
          // alignSelf: 'center',
          marginTop: 8,
          marginBottom: 6,
          justifyContent: 'center',
          marginLeft: 16, 
         
          height: 0.08*width,
          width: 0.250*width,
          textAlign: 'center',
        }} >
          <Text style={{
              alignSelf: 'center',
              fontSize: 13,
              fontWeight: 'bold',
              fontWeight: '500',
              color: '#fff',
          }}>Add Tags</Text>
        </TouchableOpacity>     
    

        <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      alignItems: 'left',
     
      marginTop: -60,
      borderRadius: 24,}}>
   <TouchableOpacity onPress={() => navigation.navigate('LocationPicker')}>
        <Text style={{
        color:'#b4b4b4',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 15,
        fontWeight: '900',
      }}>Location</Text>
      </TouchableOpacity>


<Image 
            source ={require('../../assets/icons/location.png')}
            resizeMode = 'contain'
            style = {{
              width: 15,
              height: 15,
              marginTop: 78, 
              marginLeft: 3,
              tintColor: '#b4b4b4'
              
            }}/>
      </View>

      <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      alignItems: 'left',
      borderRadius: 24,}}>
       
       <View style={{
     flexDirection: 'column',
      alignSelf: 'left',
      alignItems: 'left',
      paddingLeft: 0,
      paddingRight: 40,
      borderRadius: 24,}}>

      <View style={{
     flexDirection: 'row',}}
     >

      <Text style={{
        color:'#b4b4b4',
        textAlign: 'center',
        width: 84,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 16,
        fontWeight: 'bold',
      }}>Completion Date</Text>
       
       <Switch
         value={true}
         thumbColor={'#7DAD2F'}
         style={{
              marginTop: 20,
          }}
       />
     </View>
   

      <Text style={{
        color:'#7DAD2F',
        textAlign: 'center',
        marginLeft: -25,
        paddingTop: 20,
        fontSize: 20,

      }}>Today</Text>
      </View>
    
      <View style={{
      flexDirection: 'column',
      alignSelf: 'left',
      alignItems: 'left',
      borderRadius: 24,}}>
         
      <View style={{
      flexDirection: 'row',}}
      >

      <Text style={{
        color:'#b4b4b4',
        textAlign: 'center',
        width: 84,
        marginLeft: 0,
        paddingTop: 25,
        fontSize: 16,
        fontWeight: 'bold',
      }}>Completion Date</Text>
       
       <Switch
         value={true}
         thumbColor={'#7DAD2F'}
         style={{
              marginTop: 20,
          }}
       />
     </View>

      <Text style={{
        color:'#7DAD2F',
        textAlign: 'center',
        marginLeft: 5,
        width: 80,
        paddingTop: 10,
        fontSize: 20,
        
      }}>Till evening</Text>
      </View>
      </View>


    

     

    
      </View>
    
    </View>   
   
    <View style={{
      backgroundColor:'#34363A',
      opacity: 0.96,
      zIndex:4,
      alignSelf: 'center',
      width: 0.84*width,
      height: 0.718*width,
      marginTop: 0.05*width,
      borderRadius: 24,
  }}
  >
      <Text style={{
        color:'#b4b4b4',
        textAlign: 'left',
        marginTop: 0,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 15,
        
      }}>More details regarding the task...</Text>
     </View>

    </View>
  
  );
};

export default CreatePost;

const styles = StyleSheet.create({});