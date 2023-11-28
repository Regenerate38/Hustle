import {StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import { Image, SearchBar } from 'react-native-elements';






const { width} = Dimensions.get("window");

const POST_WIDTH = width * 0.825;
const POST_HEIGHT = 0.5*width; 

const Paid = ({navigation}) => {



  const postData = [
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
       }
  ];
  
const PostItem = ({title, image, location}) => (
  <TouchableOpacity onPress={() => navigation.navigate('PostDetail')} >
  <View
  style={{
    position: "relative",
    width: POST_WIDTH,
    height: 0.95*POST_HEIGHT,
    marginTop: 10,
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
          marginTop: 3, 
          marginLeft: 1.5,
 }}/>
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
        
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>

        
        <View style={{
          marginTop: 20,
          width: 356,
       
          position: 'fixed',
          left: 3,
          
        
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
          flexDirection: 'row',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
                  <View
                                style={{
                                position: "relative",
                                width: 157,
                                height: 48,
                                // marginVertical: 10,
                                marginHorizontal: 10,
                                backgroundColor: '#BBB049',
                                borderRadius: 23,
                                marginTop: 22,
                                justifyContent:'center',
                                alignItems: 'center',
                              }}
                              > 

                            
                              <Text style={{
                                color:'#fff',
                                fontSize: 17,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignContent: 'center',
                                paddingLeft:13,
                                paddingRight:13,

                              }}>{'Post a Task'}</Text>
                 </View>
                 </TouchableOpacity>

                  <View
                      style={{
                      position: "relative",
                      width: 157,
                      height: 48,
                      marginHorizontal: 10,
                      backgroundColor: '#BBB049',
                      borderRadius: 23,
                      marginTop: 22,
                      justifyContent:'center',
                      alignItems: 'center',
                    }}
                    > 

                   
                    <Text style={{
                      color:'#fff',
                      fontSize: 17,
                      textAlign: 'center',
                      fontWeight: 'bold',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Placeholder'}</Text>
                  </View>
        
                  </View>
       
        <Text style= {{
          marginTop: 20,
          color: '#fff',
          marginLeft: -0.56* width,
          fontSize: 15,
          fontWeight: '900',
        }}>Type of Tasks</Text>
     
          <View style={{
              flexDirection: 'row',
              marginBottom: 8,}}> 
              
               <ScrollView
                  horizontal={true}
                  alwaysBounceHorizontal={true}
                  style={{
                  marginHorizontal: 20,
                  flex: 1,
                  
                  }}>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#7DAD2F',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Outdoor Active'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2FAD97',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Outdoor Mundane'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2F80AD',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      marginTop: 10,
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Babysitting'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#ADA82F',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Maintenance Skills'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#2F52AD',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 

                    <Image source={require('../../assets/icons/walk.png')} style={{
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>
                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'Photoshop Skills'}</Text>
                  </View>

                  <View
                      style={{
                      position: "relative",
                      width: 105,
                      height: 105,
                      marginVertical: 10,
                      marginBottom: 2,
                      marginHorizontal: 10,
                      backgroundColor: '#A659CA',
                      borderRadius: 18,
                      alignItems: 'center',
                    }}> 
                  <TouchableOpacity onPress={() => navigation.navigate('MoreCategories')}>
                
                    <Image source={require('../../assets/icons/walk.png')} style={{
                      marginLeft:18,
                      height: 50,
                      width: 50,
                    marginTop: 18 
                    }}/>

                    <Text style={{
                      color:'#fff',
                      fontSize: 12,
                      justifyContent:'center',
                      textAlign: 'center',
                      alignContent: 'center',
                      paddingLeft:13,
                      paddingRight:13,

                    }}>{'More Categories'}</Text>
                       </TouchableOpacity>
                  </View>
                  

              </ScrollView>
              </View>

        <View style={{
          marginTop: 5,
          height: width *1.05,
        }}>
          <Text style = {{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 32,
              marginBottom: 2,
          }}>Posts</Text>
          <FlatList
                data={postData}
                        renderItem={({item}) => <PostItem title={item.title} image={item.image} location={item.location} />}
                        keyExtractor={item => item.id}
                ListEmptyComponent = {<Text>This is where post regarding various volunteering opportunities are kept</Text>} 
                ItemSeperatorComponent = {postgaps}
                
             />
         
       
        </View>
        
       
    </View>
    
  );
};

export default Paid;

const styles = StyleSheet.create({
  featured: {
  
  },
});