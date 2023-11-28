import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';


const { width, height } = Dimensions.get("window");

// const POST_WIDTH = width * 0.825;
// const POST_HEIGHT = 0.628*width; 

const Profile = () => {
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
      
        width: width,
        height: 0.46*width,
        backgroundColor: '#34363A', 
       }}>
        <Image source={require('../../../src/assets/coverpic.jpg')} style={{
          height: 0.48*width,
          objectFit: 'cover',
        }}/>
      
       <View style={{
        width: width,
        position: 'absolute',
        height: 0.48*width,
        backgroundColor: '#000000', 
        opacity:0.2,
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
           
          <Image source ={require('../../assets/icons/settings.png')}
            style = {{
              width: 38,
              height: 38,
            
              marginTop: 38,
              marginLeft: 340,
              // position: 'absolute',
              tintColor: '#fff'
              
            }}/></View>

    <View style={{
      backgroundColor:'#34363A',
      opacity: 0.96,
      zIndex:4,
      alignSelf: 'center',
      width: 0.84*width,
      position: 'absolute',
      height: 0.72*width,
      marginTop: 0.415*width,
      borderRadius: 24,
    


    }}
  >
     <View style={{
      backgroundColor:'#34363A',
      opacity: 0.96,
      alignSelf: 'center',
      alignItems: 'center',
      height: 0.295*width,
      width: 0.297*width,
      marginTop: -0.325*0.415*width,
      borderRadius: 24,}}>

      <Image source={require('../../../src/assets/fakeoda.png')} style={{
      height: 0.295*width,
      width: 0.297*width,
      borderRadius: 24,
      alignSelf: 'center',
    
      }}/>
      <Text style={{
        color:'#ffffff',
        fontWeight: 'bold',
        paddingTop: 12,
        fontSize: 18,
      }}
      >John Doe</Text>
          <Text style={{
        color:'#ffffff',
        paddingTop: 5,
        fontSize: 14,
      }} 
      >Sanepa</Text>
      
    </View>
    <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      alignItems: 'left',
     
      marginTop: 0.05*0.415*width,
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 13,
        fontWeight: '900',
      }}>Target Community Point:  </Text>

      <Text style={{
        color:'#2FAD97',
        textAlign: 'left',
        marginTop: 50,
        paddingTop: 25,
        fontSize: 13,
        fontWeight: '900',
      }}>100 </Text>
      </View>
      <ProgressBar progress={0.5} width={0.76*width} height={0.016*width} color="#75B457" style={{
         marginTop: 15,
         alignSelf: 'center',
         backgroundColor: '#fff',
      }} />

<View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      alignItems: 'left',
      borderRadius: 24,}}>
       
       <View style={{
     flexDirection: 'column',
      alignSelf: 'left',
      alignItems: 'left',
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 14,
      }}>Community Service Point</Text>

      <Text style={{
        color:'#2FAD97',
        textAlign: 'center',
       
        paddingTop: 15,
        fontSize: 20,
      }}>18 </Text>
      </View>
    
      <View style={{
     flexDirection: 'column',
      alignSelf: 'left',
      alignItems: 'left',
     
     
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 14,
      }}>Paid Service Point</Text>

      <Text style={{
        color:'#2FAD97',
        textAlign: 'center',
       
        paddingTop: 15,
        fontSize: 20,
        
      }}>18 </Text>
      </View>
      </View>


    </View>        
    
    <View style={{
      backgroundColor:'#34363A',
      opacity: 0.96,
      zIndex:4,
      alignSelf: 'center',
      width: 0.84*width,
      // position: 'absolute',
      height: 0.52*width,
      marginTop: 0.715*width,
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
        color:'#ffffff',
        textAlign: 'left',
        marginTop: 50,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 13,
        fontWeight: '900',
      }}>Milestones </Text>
            
    <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      // alignItems: 'left',
     
      marginTop: -0.15*width,
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        width: 0.5*width,
        marginTop: 50,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 15,
      }}>Volunteer in 10 Community Works </Text>

      <Text style={{
        color:'#7DAD2F',
        textAlign: 'right',
        marginTop: 52,
        paddingTop: 25,
        fontSize: 18,
        marginLeft: 45,
      }}>  5/10 </Text>
      </View>

      <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      // alignItems: 'left',
     
      marginTop: -0.15*width,
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        width: 0.5*width,
        marginTop: 45,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 15,
      }}>Participate in 15 Personal Works </Text>

      <Text style={{
        color:'#7DAD2F',
        textAlign: 'right',
        marginTop: 47,
        paddingTop: 25,
        fontSize: 18,
        marginLeft: 45,
      }}>  3/15 </Text>
      </View>
      <View style={{
     flexDirection: 'row',
      alignSelf: 'left',
      // alignItems: 'left',
     
      marginTop: -0.15*width,
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'left',
        width: 0.5*width,
        marginTop: 45,
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 15,
      }}>Volunteer in 5 Environment Coonscious Projects </Text>

      <Text style={{
        color:'#7DAD2F',
        textAlign: 'right',
        marginTop: 47,
        marginLeft: 50,
        paddingTop: 25,
        fontSize: 18,
       
      }}>  2/5 </Text>
      </View>

    
      </View>
    
    </View>        
   
  
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});