import {StyleSheet, Text, View, Platform, StatusBar, Flatlist } from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import CustomImageCarausel from '../components/CustomImageCarausel';
// import Postcard from '../components/Postcard';
import { Image, SearchBar } from 'react-native-elements';




// const Volunteers = () => {
 
//   const data = [
//     {
//     image:require('../assets/img/carausel/image1.png'),
//   },
//   {
//     image:require('../assets/img/carausel/image2.png'),
//   },
//   {
//     image:require('../assets/img/carausel/image3.png'),
//   },
//   {
//     image:require('../assets/img/carausel/image4.png'),
//   },
// ]

// const postData = [
// {
//  id: 1,
//  name: 'Tree Plantation in Sanepa',
//  image:require('../assets/img/recyclerview/post-image.jpg'),
// },
// {
//   id: 2,
//   name: 'Bagmati Cleaning Program',
//   image:require('../assets/img/recyclerview/post-image.jpg'),
//  },
//  {
//   id: 3,
//   name: 'Taking care of the Zoo',
//   image:require('../assets/img/recyclerview/post-image.jpg'),
//  },
//  {
//   id: 4,
//   name: 'Cleaning Program in Pulchowk',
//   image: require('../assets/img/recyclerview/post-image.jpg'),
//  },
//  {
//   id: 5,
//   name: 'Tree Plantation in Sanepa',
//   image:require('../assets/img/recyclerview/post-image.jpg'),
//  },
//  {
//    id: 6,
//    name: 'Bagmati Cleaning Program',
//    image:require('../assets/img/recyclerview/post-image.jpg'),
//   }

// ]

// postgaps  = () => {
//  return <View style= {{
//    height: 10,
//    width: '100%',
//  }}/>
// }
// const singlepost = ({item}) => {
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 13,
//       }}>
//         <View style={{
//           backgroundColor:'#D9d9d9',
//           borderRadius:100,
//           height: 89,
//           width: 89,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}> 

//         <Image source={item.image} style={{
//           height: 55,
//           width: 55,
//         }}/>
//         </View>
//       <Text style={{ 
//         fontWeight: '600',
//         fontSize: 14,
//         marginLeft: 35,
//       }}>
//         {item.name}
//         </Text>
//       </View>
// }

//   return (
//     <View
//       style={{
//         flex: 1,
//         // justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLORS.bgColor,
//       }}>
//         <View style={{
//           marginTop: 28,
//           width: 356,
//           position: 'fixed',
//           left: 3,
        
//         }}>
          
//         <SearchBar
//          placeholder="Search..  "
//          inputStyle={{
//           backgroundColor: '#34363A',
          
//         }}
//          bgColor ={'#34363A'}    
//          containerStyle ={{
//           backgroundColor: '#34363A' ,
//           borderRadius: 20,
//           borderBottomColor: 'transparent',
//           borderTopColor: 'transparent'
         
//          }} 
//          searchIcon = {null}

//          round
//          />
//         </View>
       
//         <View style={{
//           marginTop: 20,
//         }}>
//           <Text style = {styles.featured}>Featured</Text>
//           <CustomImageCarausel data={data}/>
       
//         </View>
        
//         <View style={{
//           marginTop: 20,
//         }}>
        
//          <Flatlist
//             data={postData}
//             renderItem = {({item}) => <singlepost data ={[item.postData]} />}
//             ListEmptyComponent = {<Text>This is where post regarding various volunteering opportunities are kept</Text>} 
//             ItemSeperatorComponent = {postgaps}
//             ListHeaderComponent = {<Text style={{
//               color: '#ffffff',
//               fontSize: '16',  
//               fontWeight: 'bold',
//             }}>
//               Posts</Text>}
//             ListheaderComponentStyle = {{
//               height: 30,
//               alignItems: 'left',
//               marginLeft: 35,   
//          }}
//          />
      
//         </View>
//     </View>
    
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     paddingTop: Platform.OS === 'android' ?StatusBar.currentHeight: 0,

// //   },
// //   featured: {
// //     color: '#fff',
// //     marginLeft: 53,
// //     marginBottom: 20,
// //   },

// // });

 


















// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';
// import {COLORS} from '../constants';
// import CustomImageCarausel from '../components/CustomImageCarausel';
// import { Image, SearchBar } from 'react-native-elements';

// const DATA = [
//   {
//     id: 1,
//     title: 'Tree Plantation in Sanepa',
//     image:require('../assets/img/recyclerview/post-image.jpg'),
//    },
//    {
//      id: 2,
//      title: 'Bagmati Cleaning Program',
//      image:require('../assets/img/recyclerview/post-image.jpg'),
//     },
//     {
//      id: 3,
//      title: 'Taking care of the Zoo',
//      image:require('../assets/img/recyclerview/post-image.jpg'),
//     },
//     {
//      id: 4,
//      title: 'Cleaning Program in Pulchowk',
//      image: require('../assets/img/recyclerview/post-image.jpg'),
//     },
//     {
//      id: 5,
//      title: 'Tree Plantation in Sanepa',
//      image:require('../assets/img/recyclerview/post-image.jpg'),
//     },
//     {
//       id: 6,
//       title: 'Bagmati Cleaning Program',
//       image:require('../assets/img/recyclerview/post-image.jpg'),
//      },
//      {
//       id: 7,
//       title: 'Bagmati Cleaning Program',
//       image:require('../assets/img/recyclerview/post-image.jpg'),
//      },
//      {
//       id: 8,
//       title: 'Bagmati Cleaning Program',
//       image:require('../assets/img/recyclerview/post-image.jpg'),
//      },
//      {
//       id: 9,
//       title: 'Bagmati Cleaning Program',
//       image:require('../assets/img/recyclerview/post-image.jpg'),
//      }
// ];

// const Item = ({title, image}) => (
//   <View style={{
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 13,
//   }}>
//     <View style={{
//       backgroundColor:'#D9d9d9',
//       borderRadius:100,
//       height: 89,
//       width: 89,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}> 

//     <Image source={image} style={{
//       height: 55,
//       width: 55,
//     }}/>
//     </View>
//   <Text style={{ 
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 35,
//   }}>
//     {title}
//     </Text>
//   </View>
// );

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} image={item.image} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;




<View
      style={{
        position: "relative",
        marginVertical: 10,
        marginHorizontal: width * 0.05,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 20,
              borderWidth: 1,
              padding: 2,
              borderColor: "#F47C2F",
            }}>
          
          </View>
         
         
        </View>
      
      </View>
      
        <Image
          source={image}
          style={{
            width: POST_WIDTH,
            height: POST_HEIGHT,
            borderRadius: 20,
          }}
        />
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={likePost}>
            <AntDesign
              name={liked ? "heart" : "hearto"}
              color={liked ? "#ff0000" : "#444"}
              size={POST_ACTION_ICONS_SIZE}
            />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 7 }}>{likes}</Text>
          <SimpleLineIcons
            name="bubble"
            style={{ marginLeft: 20 }}
            size={POST_ACTION_ICONS_SIZE}
          />
          <Text style={{ paddingLeft: 7 }}>{comments}</Text>
        </View>
        <FeatherIcon name="bookmark" size={POST_ACTION_ICONS_SIZE} />
      </View>
    </View>