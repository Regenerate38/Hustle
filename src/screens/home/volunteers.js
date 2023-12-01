import {Text, View, Platform, StatusBar, SafeAreaView, FlatList, Dimensions , TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import CustomImageCarausel from '../../components/CustomImageCarausel';
import { Image, SearchBar } from 'react-native-elements';
import styles from '../../Styles_holder';

const {width} = Dimensions.get("window");

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
      <View style={styles.Volunteer_PostDetail_main}> 
         
          <View style={{ height: 0.57 * 0.628*width, }}>
            <Image source={image} style={styles.Volunteer_PostDetail_image}/>
          </View>

          <View style={styles.Volunteer_PostDetail_content}>
                <Text style={styles.PostDetail_title_text}>{title}</Text>
                
                <View style={{
                      display:'flex',
                      flexDirection: 'row',
                }}>
                    <Text style={styles.PostDetail_location_text}>{location}</Text>
                    <Image source ={require('../../assets/icons/location.png')}
                           resizeMode = 'contain'
                           style = {styles.PostDetail_location_icon}/>
                </View>

                <View style={{
                      flex:1,
                      flexDirection:'row',
                }}>

        <TouchableOpacity style={styles.Volunteer_PostDetail_tags} onPress={() => navigation.navigate('Postdetail')}>
            <Text style={styles.Volunteer_PostDetail_tags_text}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Volunteer_PostDetail_tags} >
          <Text style={styles.Volunteer_PostDetail_tags_text}>Environment</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.Volunteer_PostDetail_tags}>
          <Text style={styles.Volunteer_PostDetail_tags_text}>Certificates</Text>
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
 
    <SafeAreaView style={styles.inner_page_parent_container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={COLORS.bgColor} barStyle = "light-content"  />
      
      
      <View style={styles.search_bar_container}>
        <SearchBar 
            placeholder="Search..  "
            inputStyle={{ backgroundColor: '#34363A',}}
            inputContainerStyle ={{height: 38, }}
            bgColor ={'#34363A'}    
            containerStyle ={styles.search_bar} 
            searchIcon = {null}
            round
           />
      </View>
           
        <View style={styles.featured_container}>
            <Text style = {styles.featured_title}>Featured</Text>   
            <View style={styles.featured_carausel_container}>
              <CustomImageCarausel data={data} navigation={navigation}/>
            </View>
        </View>
            
            <SafeAreaView style={styles.Volunteer_flatlist_container}>

              <Text style = {styles.flatlist_heading}>Posts</Text>
              <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} image={item.image} location={item.location} />}
                keyExtractor={item => item.id}
                ListEmptyComponent = {<Text>This is where post regarding various volunteering opportunities are kept</Text>} 
                ItemSeperatorComponent = {postgaps}
                style={{ zIndex: 5,}}  />
            
            </SafeAreaView>
         
        </SafeAreaView>
      
      );

}; 


export default Volunteers;