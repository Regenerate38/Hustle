import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';

const { width, height } = Dimensions.get("window");

const Postdetail = ({navigation}) => {
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
      
        width: 1.16*width,
        height: 0.7589*width,
        backgroundColor: '#34363A', 
       }}>
        <Image source={require('../../../src/assets/img/recyclerview/post-image.jpg')} style={{
          height: 0.7589*width,
          objectFit: 'cover',
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
           
          <Image source ={require('../../assets/icons/back.png')}
            style = {{
              width: 38,
              height: 38,
            
              marginTop: 38,
              marginLeft: 20,
              // position: 'absolute',
              tintColor: '#fff'
              
            }} onPress={() => navigation.goBack()}/></View>

    <View style={{
      backgroundColor:'#181815',
      opacity: 0.96,
      zIndex:4,
      alignSelf: 'center',
      width: width,
      position: 'absolute',
      height: 0.72*width,
      marginTop: 238,
      borderRadius: 37,
    


    }}
  >

    




    </View>        
    
    <View style={{
        marginTop: -0.1*width,
        flexDirection: 'column',
        zIndex: 10,
      }}>
      <Text style={{ 
          fontWeight: '600',
          fontSize: 24,
          marginLeft: 24,
          color: '#fff'
         }}>{'Tree Plantation In Patan'}</Text>
      <View style={{
        display:'flex',
        flexDirection: 'row',
        marginTop: 10,
      }}>
      <Text style={{ 
          fontWeight: '600',
          fontSize: 16,
          fontWeight: '100',
          marginLeft: 25,
          color: '#75B457',
         }}>{'Patan Municipality'}</Text>
     <Image 
            source ={require('../../assets/icons/location.png')}
            resizeMode = 'contain'
            style = {{
              width: 22,
              height: 22,
              tintColor:'#75B457',
              marginLeft: 3,
              
            }}/>
      </View>
      
    <View style={{
     flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 24,}}>
       
       <View style={{
     flexDirection: 'column',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'center',
        
        marginLeft: 20,
        paddingTop: 25,
        fontSize: 14,
      }}>Date</Text>

      <Text style={{
        color:'#75B457',
        textAlign: 'center',
        marginLeft: 20,
        paddingTop: 15,
        fontSize: 20,
      }}>July 23</Text>
      </View>
    
      <View style={{
     flexDirection: 'column',
      alignSelf: 'center',
      alignItems: 'center',
      marginLeft: 150,
     
     
      borderRadius: 24,}}>
    <Text style={{
        color:'#ffffff',
        textAlign: 'center',
        width: 120,
        
        paddingTop: 25,
        fontSize: 14,
      }}>Number of Volunteers</Text>

      <Text style={{
        color:'#75B457',
        textAlign: 'center',
       
        paddingTop: 15,
        fontSize: 20,
        
      }}>34</Text>
      </View>
      </View>

      <Text style={{ 
          fontWeight: '600',
          fontSize: 16,
          fontWeight: '800',
          marginTop: 15,
          marginLeft: 25,
          color: '#fff',
         }}>{'Description:'}</Text>

    <ScrollView style={{
       width: 0.925*width,
       height: 0.58*width,
      // height: 0.35*width,
       marginTop: 15,
       marginLeft: 25,
    }}>
      <Text style={{ 
          fontWeight: '600',
          fontSize: 16,
         

          color: '#fff',
         }}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.  auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. '}</Text>

</ScrollView>
<View styles={{
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <TouchableOpacity style={{
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 33,
          backgroundColor: '#75B457',
          alignSelf: 'center',
          marginHorizontal: '1%',
          marginBottom: 6,
          justifyContent: 'center',
          marginLeft: 14, 
          marginTop: 15,
          height: 0.14*width,
          width: 0.7435*width,
          textAlign: 'center',
        }} >
          <Text style={{
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              fontWeight: '500',
              color: '#fff',
          }}>I would like to Volunteer!</Text>
        </TouchableOpacity>
</View>

      </View>     
   
  
    </View>
  
  );
}

export default Postdetail

const styles = StyleSheet.create({})