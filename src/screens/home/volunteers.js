import {StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, FlatList, Dimensions , TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import CustomImageCarausel from '../../components/CustomImageCarausel';
import { Image, SearchBar } from 'react-native-elements';


const {width} = Dimensions.get("window");

const POST_WIDTH = width * 0.825;
const POST_HEIGHT = 0.628*width; 



const Volunteers = ({navigation}) => {

  const data = [
        {
        image:require('../../assets/img/carausel/image1.png'),
      },
      {
        image:require('../../assets/img/carausel/image2.png'),
      },
      {
        image:require('../../assets/img/carausel/image3.png'),
      },
      {
        image:require('../../assets/img/carausel/image4.png'),
      },
    ]

    const DATA = [
      {
        id: 1,
        title: 'Tree Plantation in Sanepa',
        image:require('../../assets/img/recyclerview/post-image.jpg'),
        location: 'Patan Municipality',
       },
       {
         id: 2,
         title: 'Bagmati Cleaning Program',
         image:require('../../assets/img/recyclerview/post-image.jpg'),
         location: 'Patan Municipality',
        },
        {
         id: 3,
         title: 'Taking care of the Zoo',
         image:require('../../assets/img/recyclerview/post-image.jpg'),
         location: 'Patan Municipality',
        },
        {
         id: 4,
         title: 'Cleaning Program in Pulchowk',
         image:require('../../assets/img/recyclerview/post-image.jpg'),
         location: 'Patan Municipality',
        },
        {
         id: 5,
         title: 'Tree Plantation in Sanepa',
         image:require('../../assets/img/recyclerview/post-image.jpg'),
         location: 'Patan Municipality',
        },
        {
          id: 6,
          title: 'Bagmati Cleaning Program',
          image:require('../../assets/img/recyclerview/post-image.jpg'),
          location: 'Patan Municipality',
         },
         {
          id: 7,
          title: 'Bagmati Cleaning Program',
          image:require('../../assets/img/recyclerview/post-image.jpg'),
          location: 'Patan Municipality',
         },
         {
          id: 8,
          title: 'Bagmati Cleaning Program',
          image:require('../../assets/img/recyclerview/post-image.jpg'),
          location: 'Patan Municipality',
         },
         {
          id: 9,
          title: 'Bagmati Cleaning Program',
          image:require('../../assets/img/recyclerview/post-image.jpg'),
          location: 'Patan Municipality',
         },
         
    ];
    
    const Item = ({title, image, location}) => (
      <TouchableOpacity   onPress={() => navigation.navigate('VPostDetail')}>
      <View
      style={{
        position: "relative",
        width: POST_WIDTH,
        height: POST_HEIGHT,
        marginVertical: 10,
        marginBottom: 2,
        marginHorizontal: width * 0.05,
        backgroundColor: '#333333',
        borderRadius: 25
      }}> 
        <View style={{
          height: 0.57 * POST_HEIGHT,
  
        }}>
           <Image source={image} style={{
        height: 0.58*POST_HEIGHT,
        borderRadius: 25,
        margin: 12,
        aspectRatio: 'auto',
      }}/>
        </View>
      <View style={{
        marginTop: 0.082*POST_HEIGHT,
        flexDirection: 'column',
      }}>
      <Text style={{ 
          fontWeight: '600',
          fontSize: 19.2,
          fontWeight: 'bold',
          marginLeft: 13,
          color: '#fff'
         }}>{title}</Text>
      <View style={{
        display:'flex',
        flexDirection: 'row',
      }}>
      <Text style={{ 
          fontWeight: '600',
          fontSize: 12.2,
          fontWeight: '100',
          marginLeft: 13,
          color: '#fff'
         }}>{location}</Text>
     <Image 
            source ={require('../../assets/icons/location.png')}
            resizeMode = 'contain'
            style = {{
              width: 12,
              height: 12,
              top: 3, 
              left: 1.5,
              
            }}/>
      </View>
      <View style={{
        flex:1,
        flexDirection:'row',
      }}>
        <TouchableOpacity style={{
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 24,
          backgroundColor: '#ECECEC',
          alignSelf: 'flex-start',
          marginHorizontal: '1%',
          marginBottom: 6,
          marginLeft: 14, 
          marginTop: 10,
          height: 0.1*POST_HEIGHT,
          textAlign: 'center',
        }} onPress={() => navigation.navigate('Postdetail')}>
          <Text style={{
             
              fontSize: 12,
              fontWeight: '500',
              color: '#575151',
          }}>Social Cause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 24,
          backgroundColor: '#ECECEC',
          alignSelf: 'flex-start',
          marginHorizontal: '1%',
          marginBottom: 6,
          marginLeft: 8,
          marginTop: 10,
          height: 0.1*POST_HEIGHT,
          textAlign: 'center',
        }} >
          <Text style={{
             
              fontSize: 12,
              fontWeight: '500',
              color: '#575151',
          }}>Environment</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 24,
          backgroundColor: '#ECECEC',
          alignSelf: 'flex-start',
          marginHorizontal: '1%',
          marginBottom: 6,
          marginLeft: 8,
          marginTop: 10,
          height: 0.1*POST_HEIGHT,
          textAlign: 'center',
        }} >
          <Text style={{
             
              fontSize: 12,
              fontWeight: '500',
              color: '#575151',
          }}>Certificates</Text>
        </TouchableOpacity>

      </View>
      </View>
    </View>
    </TouchableOpacity>
    );
    


    postgaps  = () => {
       return <View style= {{
         height: 8,
         width: '100%',
       }}/>
      }

  return (
 
     <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.bgColor,
          }}>
           
            <View style={{
              marginTop: 20,
              width: 356,
              height: 0.1*width,
              position: 'fixed',
              marginLeft: 5,
            
            }}>
              
            <SearchBar
           
             placeholder="Search..  "
             inputStyle={{
              backgroundColor: '#34363A',
            }}
            inputContainerStyle ={{
              height: 38,
            }}
             bgColor ={'#34363A'}    
             containerStyle ={{
              backgroundColor: '#34363A' ,
              borderRadius: 20,
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent'
             
             }} 
             searchIcon = {null}
    
             round
             />
            </View>
           
            <View style={{
              marginTop: 32,
            }}>
              <Text style = {{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 12,
                marginLeft: 45,

              }}>Featured</Text>
                 <View style={{
                  width: width,
                  height: 0.6* width,
            }}>
              <CustomImageCarausel data={data}/>
            </View>
              
              
            </View>
            
            <SafeAreaView style={{ 
              marginTop: 5,
              height: width *0.85,
            }}>
              <Text style = {{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: -20,
                marginLeft: 35,

              }}>Posts</Text>
             <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} image={item.image} location={item.location} />}
                keyExtractor={item => item.id}
                ListEmptyComponent = {<Text>This is where post regarding various volunteering opportunities are kept</Text>} 
                ItemSeperatorComponent = {postgaps}
                style={{
                  
                  zIndex: 5,
                }}
                
             />
             
          
            </SafeAreaView>
         
        </View>
      
       
        
      );

}; 

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
        flex: 1,
        backgroundColor: '#34363A',
        paddingTop: Platform.OS === 'android' ?StatusBar.currentHeight: 0,
    
      },
    
});

export default Volunteers;